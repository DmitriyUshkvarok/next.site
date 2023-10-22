'use server';
import connectDB from '../utils/db';
import Works from '../models/aboutWorksModel';
import { revalidatePath } from 'next/cache';

connectDB();

export async function createWork(data) {
  try {
    const newWork = new Works(data);
    await newWork.save();

    revalidatePath('/');

    return { ...newWork._doc, _id: newWork._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to create work!');
  }
}

export const getAllWorks = async () => {
  try {
    const works = await Works.find();

    const newData = works.map((item) => ({
      ...item._doc,
      _id: item._doc._id.toString(),
    }));

    return { works: newData };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
};
