const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
});

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

module.exports = router;
