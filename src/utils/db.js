import mongoose from 'mongoose';
const { MONGO } = process.env;

const connectDB = async () => {
  // if (mongoose.connection[0].readyState) {
  //   return true;
  // }
  try {
    await mongoose.connect(MONGO);
    console.log('Database connection successful');
  } catch (e) {
    console.log(e.message);
    throw new Error('error connection');
  }
};

export default connectDB;
