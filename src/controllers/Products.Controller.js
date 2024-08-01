// controllers/productController.js
import Product from '../models/Product.js';

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        const newProduct = new Product({ title, description, price });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
