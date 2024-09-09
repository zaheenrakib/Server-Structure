const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Add product using POST method
router.post('/add', async (req, res) => {
    const { name, details, price, quantity, addedBy, photos } = req.body;
    try {
        const newProduct = new Product({
            name,
            details,
            price,
            quantity,
            addedBy,
            photos,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: savedProduct
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error adding product",
            error: err.message
        });
    }
});

// Get all products using GET method
router.get('/allProduct', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: err.message
        });
    }
});

module.exports = router;
