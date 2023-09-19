import connectDB from '@/src/utils/db';
import Post from '../../../models/posts';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json({ posts });
  } catch (error) {
    return new NextResponse('error response DB', { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();
    const { title, desc, img, content } = await request.json();
    console.log('Received data:', { title, desc, img, content });

    await Post.create({ title, desc, img, content });

    return new NextResponse('Post created successfully', { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error creating Post', { status: 500 });
  }
};
