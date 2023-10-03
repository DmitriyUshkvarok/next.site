'use server';
import connectDB from '../utils/db';
import Comment from '../models/comments';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { revalidatePath } from 'next/cache';
import { authOption } from '../app/api/auth/[...nextauth]/route';

connectDB();

export const createComment = async ({
  postId,
  text,
  userId,
  userName,
  userAvatar,
}) => {
  try {
    const session = await getServerSession(authOption);

    if (!session || !session.user) {
      return { msg: 'для отправки коментария авторизуйтесь' };
    }

    const newComment = new Comment({
      postId,
      text,
      userId,
      userName,
      userAvatar,
    });

    await newComment.save();

    revalidatePath('/');

    return new NextResponse('Comment created successfully', { status: 201 });
  } catch (error) {
    console.error('Произошла ошибка при создании коментария:', error);
    throw error; // Перехватываем и перебрасываем ошибку
  }
};

export const getAllComments = async (postId) => {
  try {
    const comments = await Comment.find({ postId });

    const newData = comments.map((item) => ({
      ...item._doc,
      _id: item._doc._id.toString(),
    }));
    return { comments: newData };
  } catch (error) {
    console.error(error);
    return new NextResponse('Error getting comments', { status: 500 });
  }
};

// Серверный экшен для получения всех комментариев
export const getAllCommentsForAdmin = async () => {
  try {
    const comments = await Comment.find();

    const newData = comments.map((item) => ({
      ...item._doc,
      _id: item._doc._id.toString(),
    }));
    return { comments: newData };
  } catch (error) {
    console.error(error);
    return new NextResponse('Error getting comments', { status: 500 });
  }
};

export const updateComment = async (id, data) => {
  try {
    const session = await getServerSession(authOption);

    if (!session || !session.user) {
      return { msg: 'для edit коментария авторизуйтесь' };
    }
    const comment = await Comment.findByIdAndUpdate(id, data, { new: true });

    if (!comment) {
      // Если комментарий не найден, верните ошибку 404
      return new NextResponse('Comment not found', { status: 404 });
    }
    revalidatePath('/');
    return { ...comment._doc, _id: comment._id.toString() };
  } catch (error) {
    console.error(error);
    return new NextResponse('Error updating comment', { status: 500 });
  }
};

export const deleteComment = async (commentId) => {
  try {
    const session = await getServerSession(authOption);

    if (!session || !session.user) {
      // Если пользователь не аутентифицирован, верните ошибку 401
      return new NextResponse('Authentication required', { status: 401 });
    }

    const comment = await Comment.findByIdAndDelete(commentId, {
      new: true,
    });

    revalidatePath('/');

    return { ...comment._doc, _id: comment._id.toString() };
  } catch (error) {
    console.error(error);
    return new NextResponse('Error deleting comment', { status: 500 });
  }
};
