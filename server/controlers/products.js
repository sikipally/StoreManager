import products from '../models/products';

export const getAll = (req, res) => {
  res.status(200).json({
    status: 'success',
    products,
  });
};

export default products;
