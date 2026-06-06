import { NextFunction, Request, Response } from "express";
import Product from "./product.model";
import { buildProductQuery } from "./product.service";

/*
Search by name:
GET /api/products?search=phone

Filter by category:
GET /api/products?category=electronics

Filter by price range:
GET /api/products?minPrice=100&maxPrice=500

Sort by price descending:
GET /api/products?sortBy=price&sortOrder=desc

Pagination (page 2, 5 per page):
GET /api/products?page=2&limit=5
*/

// Get products with search, filter, sort, pagination
export const getProducts = async (req: Request, res: Response) => {
  try {
    const { search, category, minPrice, maxPrice, sortBy, sortOrder, page, limit } = req.query;

    const query = buildProductQuery({
      search: search as string,
      category: category as string,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });

    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 10;
    const skip = (pageNum - 1) * limitNum;
    const sortField = (sortBy as string) || "createdAt";
    const sortDirection: 1 | -1 = sortOrder === "desc" ? -1 : 1;

    const products = await Product.find(query)
      .sort({ [sortField]: sortDirection })
      .skip(skip)
      .limit(limitNum);

    const total = await Product.countDocuments(query);

    res.json({ total, page: pageNum, limit: limitNum, products });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Create product with image
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const image = req.file ? req.file.filename : null;

    const product = await Product.create({ name, description, price, category, stock, image });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to create product", details: error });
  }
};

// Get single product
export const getProductById = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const product = await Product.findById(req.params.id);
    // if (!product) return res.status(404).json({ error: "Product not found" });
    if (!product) {
      const error = new Error("Product not found");
      (error as any).statusCode = 404;
      throw error;
    } 
    res.json(product);
  } catch (error) {
    // res.status(500).json({ error: "Failed to fetch product" });
    next(error); // forward to global error handler
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


// Get all products
/*
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
*/