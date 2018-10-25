import sales from '../models/sales';
import { findById } from './products';

export const getAllRecords = (req, res) => {
  const salesRecord = sales.map((sale) => {
    // get all the products in a given record using their Ids
    const products = sale.products.map(productId => findById(productId));
    // adds the products object to the sale record
    sale = { ...sale, products }; // eslint-disable-line
    return sale;
  });
  if (salesRecord.length !== 0) {
    return res.status(200).json({
      status: 'success',
      salesRecord,
    });
  }
  return res.status(404).json({
    status: 'error',
    message: 'No record found',
  });
};

export const getSingleRecord = (req, res) => {
  const { salesId } = req.params;

  let sale = sales.find(record => record.id === parseInt(salesId, 10));

  if (sale) {
    // get all the products in a given record using their Ids
    const products = sale.products.map(productId => findById(productId));
      sale = { ...sale, products }; // eslint-disable-line
    return res.status(200).json({
      status: 'success',
      sale,
    });
  }
  return res.status(404).json({
    status: 'error',
    message: 'No sales record with the given Id',
  });
};

export const createRecord = (req, res) => {
  const { products } = req.body;
  // Check that the product field is an array
  if (!products || products === [] || !Array.isArray(products)) {
    return res.status(400).json({
      status: 'error',
      message: 'The products field should be an array of product Ids',
    });
  }
  // get all the products using their Ids
  const productsInCart = products.map((productId) => {
    const product = findById(productId);
    return product;
  });

  // Calculate the cost of the sales from the products prices
  let cost = 0;
  productsInCart.map((product) => {
    cost += product.price;
    return null;
  });
  // Creates the sales object and add it to the sales array
  const sale = {
    id: `${sales.length + 1}`,
    attendantId: 3,
    cost,
    products,
    date: new Date(),
  };
  sales.push(sale);
  const newSale = {
    ...sale,
    products: productsInCart,
  };
  return res.status(201).json({
    status: 'success',
    sales: newSale,
  });
};
