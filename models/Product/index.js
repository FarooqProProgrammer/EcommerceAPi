const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        Size: {
            type: String,
        },
        Color: {
            type: String,
        },
        Tags: {
            type: String,
        },
        Brand: {
            type: String,
        },
        AdditionalInformation: {
            type: String,
        },
        SizeGuide: {
            type: String,
        },
        Review: {
            type: String,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;