'use server';
import connectDB from '../utils/db';
import Portfolio from '../models/portfolio';
import { revalidatePath } from 'next/cache';

connectDB();

export async function createPortfolio(data) {
  try {
    const newPortfolio = new Portfolio(data);
    await newPortfolio.save();

    revalidatePath('/');

    return { ...newPortfolio._doc, _id: newPortfolio._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to create post!');
  }
}

export async function getAllPortfolio() {
  try {
    // const portfolios = await Portfolio.find();
    const portfolios = await Portfolio.find().sort({ order: 1 }); // сортируем по полю order

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

export async function updatePortfoliosOrder(updatedOrder) {
  try {
    // Массив updatedOrder содержит объекты с _id и order для обновления
    updatedOrder.forEach(async (item) => {
      await Portfolio.findByIdAndUpdate(item._id, { order: item.order });
    });

    // После обновления всех порядков, перезагружаем данные и возвращаем их
    const portfolios = await Portfolio.find().sort({ order: 1 });

    const newData = portfolios.map((item) => ({
      ...item._doc,
      _id: item._doc._id.toString(),
    }));

    revalidatePath('/');

    return { portfolios: newData };
  } catch (error) {
    console.error('Произошла ошибка при обновлении порядка:', error);
    throw error;
  }
}

export async function updatePortfolio(id, data) {
  try {
    delete data.updatedAt;

    const portfolio = await Portfolio.findByIdAndUpdate(id, data, {
      new: true,
    });

    revalidatePath('/');

    return { ...portfolio._doc, _id: portfolio._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to update portfolio!!');
  }
}

export async function deletedPortfolio(portfolioId) {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(portfolioId, {
      new: true,
    });

    revalidatePath('/');

    return { ...portfolio._doc, _id: portfolio._id.toString() };
  } catch (error) {
    throw new Error(error.message || 'Failed to deleted portfolio!!');
  }
}
