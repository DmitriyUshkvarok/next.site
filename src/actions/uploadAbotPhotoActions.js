'use server';
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import os from 'os';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';
import { createWork } from './worksAction';

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
    cloudinary.v2.uploader.upload(file.filePath, { folder: 'works_photo' })
  );

  return await Promise.all(multiplePhotosPromise);
}

// const delay = (delayInms) => {
//   return new Promise((resolve) => setTimeout(resolve, delayInms));
// };

export async function uploadPhotoWork(formData, workData) {
  try {
    const newFiles = await savePhotoToLocal(formData);

    const photos = await uploadPhotosToCloudinary(newFiles);

    newFiles.map((file) => fs.unlink(file.filePath));

    // await delay(2000);

    const secureUrl = photos[0].secure_url;

    workData.image = secureUrl;

    await createWork(workData);

    revalidatePath('/');
    return { msg: 'upload success' };
  } catch (error) {
    return { erMsg: error.message };
  }
}

// Функция для загрузки аватара
// export async function uploadAvatar({ userId, formData }) {
//   try {
//     const uploadResponse = await uploadPhoto(formData, userId);
//     return uploadResponse;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function revalidate(path) {
  return revalidatePath(path);
}

export async function deletePhoto(public_id) {
  try {
    await Promise.all([
      Photo.findOneAndDelete({ public_id }),
      cloudinary.v2.uploader.destroy(public_id),
    ]);

    revalidatePath('/');
    return { msg: 'Delete seccess' };
  } catch (error) {}
}
