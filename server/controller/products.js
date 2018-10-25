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


export const getSingle = (req, res) => {
  const { productId } = req.params;
  const product = findById(productId);
  if (product) {
    return res.status(200).json({
      status: 'success',
      product,
    });
  }
  return res.status(404).json({
    status: 'error',
    message: 'No product with the given ID found. Please try again',
  });
};

export default products;
