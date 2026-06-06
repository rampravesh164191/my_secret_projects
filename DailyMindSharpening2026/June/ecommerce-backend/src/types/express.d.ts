import { Request } from "express";
import { File } from "multer";

//without this there is error showing in product controller while creating product
declare module "express-serve-static-core" {
  interface Request {
    file?: File;
    files?: File[];
  }
}
