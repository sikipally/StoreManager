import express from 'express';
import { getAll, getSingle } from './controller/products';

const router = express.Router();

router.get('/products', getAll);
router.get('/products/:Id', getSingle);

export default router;
