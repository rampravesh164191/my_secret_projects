import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  products: { product: mongoose.Types.ObjectId; quantity: number }[];
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
}

const orderSchema: Schema<IOrder> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

    products: {
      type: [
        {
          product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
          quantity: { type: Number, required: true, default: 1, min: 1 },
        },
      ],
      validate: [(val: any[]) => val.length > 0, "Order must contain at least one product"],
    },

    totalPrice: { type: Number, required: true },

    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Auto-calculate totalPrice before saving
orderSchema.pre<IOrder>("save", async function () {
  let total = 0;
  for (const item of this.products) {
    const product = await mongoose.model("Product").findById(item.product);
    if (product) {
      // @ts-ignore: product.price exists in Product model
      total += product.price * item.quantity;
    }
  }
  this.totalPrice = total;
});

export default mongoose.model<IOrder>("Order", orderSchema);
