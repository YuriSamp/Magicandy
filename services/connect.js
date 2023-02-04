import mongoose from 'mongoose';

//? acho que a tipagem seria isConnected = boolean

// const connection = {};

async function connect() {
  mongoose.set('strictQuery', false);
  // if (connection.isConnected) {
  //   return;
  // }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }

  // if (mongoose.connect.length > 0) {
  //   connection.isConnected = mongoose.connections[0].readyState;
  //   if (mongoose.connect.length === 1) {
  //     return;
  //   }
  //   mongoose.disconnect;
  // }
  // const db = mongoose.connect(process.env.MONGODB_URI);
  // connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  // if (connection.isConnected) {
  // if (process.env.NODE_ENV === 'production') {
  // await mongo.disconnect();
  // connect.isConnected = false;
  // }
  // }
}

const dbConnect = { connect, disconnect };
export default dbConnect;
