import mongoose, { model, models } from 'mongoose';

const { Schema } = mongoose;

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
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
      required: true,
    },
    image: {
      type: String, // Это может быть URL изображения портфолио
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio = models.Portfolio || model('Portfolio', portfolioSchema);

export default Portfolio;
