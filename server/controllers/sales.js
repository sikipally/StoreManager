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
