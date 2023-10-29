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

export async function deletedWorks(workId) {
  try {
    const work = await Works.findByIdAndDelete(workId, {
      new: true,
    });

    revalidatePath('/');

    return { ...work._doc, _id: work._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to deleted work!!');
  }
}

export async function updateWork(id, data, newImage = null) {
  try {
    const work = await Works.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (newImage) {
      work.image = newImage; // Обновляем изображение, если новое изображение передано
    }

    const reliableData = {
      _id: work._id.toString(),
      enterprise: work.enterprise,
      data: work.data,
      region: work.region,
      position: work.position,
      image: work.image,
      order: work.order,
      photos: work.photos,
    };

    revalidatePath('/');

    return reliableData;
  } catch (error) {
    throw new Error(error.message || 'Failed to update work!!');
  }
}
