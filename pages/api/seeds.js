import Product from '../../models/product';
import dbConnect from '../../services/connect';
import dbLocal from '../../data/db.json';

const handler = async (res, req) => {
  await dbConnect.connect();
  await Product.deleteMany();
  await Product.insertMany(dbLocal);
  await dbConnect.disconnect();
  res.send({ message: 'deu tudo certo' });
};

export default handler;
