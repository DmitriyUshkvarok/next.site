'use server';
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import os from 'os';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function savePhotoToLocal(formData) {
  const files = formData.getAll('files');

  const multipleBuffersPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split('/')[1];

      //   const uploadDir = path.join(
      //     process.cwd(),
      //     'public/uploads',
      //     `/${name}.${ext}`
      //   ); doesn`t work vercel

      const tempdir = os.tmpdir();
      const uploadDir = path.join(tempdir, `/${name}.${ext}`);
      fs.writeFile(uploadDir, buffer);

      return { filePath: uploadDir, fileName: file.name };
    })
  );

  return await Promise.all(multipleBuffersPromise);
}

async function uploadPhotosToCloudinary(newFiles) {
  const multiplePhotosPromise = newFiles.map((file) =>
    cloudinary.v2.uploader.upload(file.filePath, { folder: 'my_site' })
  );

  return await Promise.all(multiplePhotosPromise);
}

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export async function uploadPhoto(formData) {
  try {
    const newFiles = await savePhotoToLocal(formData);

    const photos = await uploadPhotosToCloudinary(newFiles);

    newFiles.map((file) => fs.unlink(file.filePath));

    await delay(2000);

    revalidatePath('/');
    return { msg: 'upload succsess' };
  } catch (error) {
    return { erMsg: error.message };
  }
}

export async function getAllPhotos() {
  try {
    const { resources } = await cloudinary.v2.search
      .expression('folder:my_site/*')
      .sort_by('created_at', 'desc')
      .max_results(500)
      .execute();

    return resources;
  } catch (error) {
    return { erMsg: error.message };
  }
}

export async function revalidate(path) {
  return revalidatePath(path);
}
