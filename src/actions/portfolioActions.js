'use server';
import connectDB from '../utils/db';
import Portfolio from '../models/portfolio';

connectDB();

export async function createPortfolio(data) {
  try {
    const newPortfolio = new Portfolio(data);
    await newPortfolio.save();
    return { ...newPortfolio._doc, _id: newPortfolio._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to create post!');
  }
}

export async function getAllPortfolio() {
  try {
    const portfolios = await Portfolio.find();

    const newData = portfolios.map((item) => ({
      ...item._doc,
      _id: item._doc._id.toString(),
    }));

    return { portfolios: newData };
  } catch (error) {
    console.error('Произошла ошибка при получении портфолио:', error);
    throw error; // Перехватываем и перебрасываем ошибку
  }
}
