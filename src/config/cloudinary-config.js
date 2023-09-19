import multer from 'multer';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Настройки Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Настройки хранилища для загруженных изображений
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'portfolio', // Папка на Cloudinary, куда будут загружаться изображения
    allowed_formats: ['jpg', 'jpeg', 'png'], // Разрешенные форматы изображений
    max_file_size: 2000000, // Максимальный размер файла (2 МБ)
  },
});

// Настройка Multer
const upload = multer({ storage });

export default upload;
