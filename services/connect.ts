import mongoose from 'mongoose';

async function connect() {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
}

const dbConnect = { connect };
export default dbConnect;
