import upload from '@/src/config/cloudinary-config';
import Portfolio from '@/src/models/portfolio';
import connectDB from '@/src/utils/db';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectDB();

    const { title, image, description, website, pageCode } =
      await request.json();

    await Portfolio.create({
      title,
      image,
      description,
      website,
      pageCode,
    });

    return new NextResponse('portfolio created successfully', { status: 201 });
  } catch (error) {
    console.error(error); // Вывести ошибку в консоль для отладки
    return new NextResponse('Error creating portfolio', { status: 500 });
  }
};
