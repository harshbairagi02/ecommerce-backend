const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String   // 👈 add this
});

module.exports = mongoose.model("Product", productSchema);
