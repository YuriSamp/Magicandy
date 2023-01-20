import mongoose, { mongo } from 'mongoose';

//? acho que a tipagem seria isConnected = boolean

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('ja ta conectado');
    return;
  }
  if (mongoose.connect.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (mongoose.connect.length === 1) {
      return;
    }
    await mongoose.disconnect;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongo.disconnect();
      connect.isConnected = false;
    }
  }
}

const dbConnect = { connect };
export default dbConnect;
