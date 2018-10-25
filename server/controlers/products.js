import products from '../models/products';

export const findById = (productId) => {
  const product = products.find(singleProduct => singleProduct.id === productId);
  return product;
};

export const getAll = (req, res) => {
  res.status(200).json({
    status: 'success',
    products,
  });
};

export default products;
