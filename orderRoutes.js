const express = require("express");
const Order = require("../models/order");

const router = express.Router();

router.post("/", async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.send(order);
});

router.get("/", async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

module.exports = router;
