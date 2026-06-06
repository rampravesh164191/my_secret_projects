// product.service.ts
export const buildProductQuery = ({
  search,
  category,
  minPrice,
  maxPrice,
}: {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const query: any = {};
  if (search) query.name = { $regex: search, $options: "i" };
  if (category) query.category = category;
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }
  return query;
};
