import express from 'express';
import { getAll } from './controlers/products';

const router = express.Router();

router.get('/products', getAll);

export default router;
