import mongoose from 'mongoose';

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Это может быть URL изображения портфолио
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String, // URL сайта
      required: true,
    },
    pageCode: {
      type: String, // URL кода страницы
    },
  },
  { timestamps: true }
);

export default mongoose.models.Portfolio ||
  mongoose.model('Portfolio', portfolioSchema);
