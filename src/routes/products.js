// routes/productRoutes.js
import express from 'express';
import { createProduct, getProducts } from '../controllers/Products.Controller.js';

const router = express.Router();

// Route to create a new product
router.post('/products', createProduct);

// Route to get all products
router.get('/products', getProducts);

export default router;
