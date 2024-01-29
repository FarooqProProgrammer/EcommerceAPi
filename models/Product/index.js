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
            required: true,
        },
        Color: {
            type: String,
            required: true,
        },
        Tags: {
            type: String,
            required: true,
        },
        Brand: {
            type: String,
            required: true,
        },
        AdditionalInformation: {
            type: String,
            required: true,
        },
        SizeGuide: {
            type: String,
            required: true,
        },
        Review: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;