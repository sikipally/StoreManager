import express from 'express';
import { getAll, getSingle } from './controller/products';

const router = express.Router();

router.get('/products', getAll);

router.get('/products/:Id', getSingle);

router.get('/sales', getAllRecords);

router.post('/sales', createRecord);


export default router;
