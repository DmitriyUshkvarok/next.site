'use server';
import { authOption } from '@/src/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import User from '@/src/models/users';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { generateToken, veryfyToken } from '../utils/token';
import sendEmail from '../utils/sendEmail';
import { revalidatePath } from 'next/cache';

const BASE_URL = process.env.NEXTAUTH_URL;

export const updateUser = async ({ name, image }) => {
  try {
    const session = await getServerSession(authOption);
    if (!session) throw new Error('Unauthorization');
    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select('-password');
    if (!user) throw new Error('Email does not exist!');
    return { msg: 'Update Profile Seccesfully!' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
};

export const signUpWithCredential = async (data) => {
  try {
    const user = await User.findOne({ email: data.email });

    if (user) throw new Error('Email already exists!');

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }

    const token = generateToken({ user: data });
    // verifyWithCredentials(token);

    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: 'VERIFY EMAIL',
    });

    return { msg: 'Registration Seccesfully!' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
};

export async function verifyWithCredentials(token) {
  try {
    const { user } = veryfyToken(token);
    const userExist = await User.findOne({ email: user.email });
    if (userExist) return { msg: 'verify seccess!' };

    const newUser = new User(user);
    await newUser.save();
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function changePasswordWithCredentials({ old_pass, new_pass }) {
  try {
    const session = await getServerSession(authOption);
    if (!session) throw new Error('Unauthorization');

    if (session?.user?.provider !== 'credentials') {
      throw new Error(
        `This account is signet in with ${session?.user?.provider} You cant use this function`
      );
    }

    const user = await User.findById(session?.user?._id);
    if (!user) throw new Error('User does not exists!');

    const compare = await bcrypt.compare(old_pass, user.password);

    if (!compare) throw new Error('Old password does not match!');

    const newPassword = await bcrypt.hash(new_pass, 12);

    await User.findByIdAndUpdate(user._id, { password: newPassword });
    return { msg: 'Change password seccesfully!' };
  } catch (error) {}
}

export async function forgotPasswordWithCredentials({ email }) {
  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error('Email does not exists!');

    if (user?.provider !== 'credentials') {
      throw new Error(
        `This account is signet in with ${user?.provider} You cant use this function`
      );
    }
    const token = generateToken({ userId: user._id });

    await sendEmail({
      to: email,
      url: `${BASE_URL}/reset_password?token=${token}`,
      text: 'RESET PASSWORD',
    });
    return { msg: 'success !Check your email to reset your password' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export async function resetPasswordWithCredentials({ token, password }) {
  try {
    const { userId } = veryfyToken(token);
    const newPass = await bcrypt.hash(password, 12);
    await User.findByIdAndUpdate(userId, { password: newPass });

    return { msg: 'success !Your password has been reset' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

export const getAllUsers = async () => {
  try {
    const users = await User.find();

    const newData = users.map((item) => ({
      ...item._doc,
      _id: item._doc._id.toString(),
    }));

    return { users: newData };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
};

export const deleteUser = async (userId) => {
  try {
    const users = await User.findByIdAndDelete(userId, { new: true });

    revalidatePath('/');

    return { ...users._doc, _id: users._id.toString() };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
};

export const updateUserRole = async (userId, newRole) => {
  try {
    const session = await getServerSession(authOption);
    if (!session || !session.user) {
      // Если пользователь не аутентифицирован, верните ошибку 401
      throw new Error('Authentication required');
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        role: newRole,
      },
      { new: true }
    );

    revalidatePath('/');

    if (!user) {
      // Если пользователь не найден, верните ошибку
      throw new Error('User not found');
    }

    return { msg: 'Role updated successfully' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
};
