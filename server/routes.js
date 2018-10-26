import express from 'express';
import { getAllProducts, getSingleProduct } from './controllers/products';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getSingleProduct);

export default router;
