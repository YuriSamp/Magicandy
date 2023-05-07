import mongoose from 'mongoose';
import { IProduto } from 'src/interface/IProduto';

const Productschema = new mongoose.Schema<IProduto>(
  {
    ProductTitle: { type: String, required: true, unique: true },
    ProductPrice: { type: Number, required: true },
    Alt: { type: String, required: true },
    Src: { type: String, required: true },
    Description: { type: String, required: true },
    Category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model<IProduto>('Product', Productschema);

export default Product;
