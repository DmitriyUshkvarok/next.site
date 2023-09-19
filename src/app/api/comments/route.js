import connectDB from '@/src/utils/db';
import Comment from '../../../models/comments';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    // Подключитесь к базе данных
    await connectDB();
    // Получите данные из запроса
    const { postId, text } = await request.json();

    // Создайте новый комментарий
    await Comment.create({ postId, text });

    return new NextResponse('Comment created successfully', { status: 201 });
  } catch (error) {
    console.error(error); // Вывести ошибку в консоль для отладки
    return new NextResponse('Error creating comment', { status: 500 });
  }
};
