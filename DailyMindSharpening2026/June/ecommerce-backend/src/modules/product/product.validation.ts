import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  stock: Joi.number().min(0).default(0),
});
