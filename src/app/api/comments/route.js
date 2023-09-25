import connectDB from '@/src/utils/db';
import Comment from '../../../models/comments';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// import { authOption } from '@/src/app/api/auth/[...nextauth]/route';

export const POST = async (request) => {
  try {
    // Подключитесь к базе данных
    await connectDB();
    // Получите данные из запроса
    const { postId, text } = await request.json();

    // Проверьте аутентификацию пользователя
    const session = await getServerSession({ req: request });

    if (!session || !session.user) {
      // Если пользователь не аутентифицирован, верните ошибку 401
      return new NextResponse('Authentication required', { status: 401 });
    }

    // Создайте новый комментарий
    await Comment.create({ postId, text, userId: session.user._id });

    return new NextResponse('Comment created successfully', { status: 201 });
  } catch (error) {
    console.error(error); // Вывести ошибку в консоль для отладки
    return new NextResponse('Error creating comment', { status: 500 });
  }
};
