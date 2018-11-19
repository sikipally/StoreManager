import express from 'express';
import { getAll, getSingle, create } from './controllers/products';
import { getAllRecords, getSingleRecord } from './controllers/sales';

const router = express.Router();

router.get('/products', getAll);

router.post('/products', create);

router.get('/products/:productId', getSingle);

router.get('/sales', getAllRecords);

router.get('/sales/:salesId', getSingleRecord);


export default router;
