import { Request, Response } from "express";
import Order from "./order.model";
import Product from "../product/product.model";
import { AuthRequest } from "../../middleware/auth.middleware";

// Create order (User)
export const createOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { products } = req.body;

    // Calculate total price
    let totalPrice = 0;
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) return res.status(404).json({ error: "Product not found" });
      totalPrice += product.price * item.quantity;
    }

    const order = await Order.create({
      user: req.user?.id,
      products,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: "Failed to create order", details: error });
  }
};

// Get user’s own orders
export const getMyOrders = async (req: AuthRequest, res: Response) => {
  try {
    const orders = await Order.find({ user: req.user?.id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// Get all orders (Admin)
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("user").populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all orders" });
  }
};

// Update order status (Admin)
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: "Failed to update order" });
  }
};
