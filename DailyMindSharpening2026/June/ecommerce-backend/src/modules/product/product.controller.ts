import { Request, Response } from "express";
import Product from "./product.model";

// Create product (Admin only)
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const product = await Product.create({ name, description, price, category, stock });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to create product", details: error });
  }
};

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Get single product
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// Update product (Admin only)
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to update product" });
  }
};

// Delete product (Admin only)
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
