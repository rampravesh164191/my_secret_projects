import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../utils/env";

export interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET) as { id: string; role: string };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
