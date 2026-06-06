import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image?:string | null;
}
//for creating porduct -> postman -> not raw data but form data then key names without quotes and image type is file then select the image
const productSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 },
    image: { type: String, default:null },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
