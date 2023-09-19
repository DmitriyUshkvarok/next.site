'use server';
import { authOption } from '@/src/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import User from '@/src/models/users';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { generateToken, veryfyToken } from '../utils/token';
// import sendEmail from '../utils/sendEmail';

const BASE_URL = process.env.NEXTAUTH_URL;

export const updateUser = async ({ name, image }) => {
  const session = await getServerSession(authOption);
  if (!session) throw new Error('Unauthorization');
  try {
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
    verifyWithCredentials(token);

    // await sendEmail({
    //   to: data.email,
    //   url: `${BASE_URL}/verify?token=${token}`,
    //   text: 'VERIFY EMAIL',
    // });

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
    console.log({ newUser });
    await newUser.save();
  } catch (error) {}
}
