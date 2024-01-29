const mongoose = require('mongoose');


const WishList = mongoose.Schema(
    {
        AuthorID : {
            type: String,
            required: true,
        },
        WishListImage : {
            type: String,
            required: true,
        },
        WishListProductName: {
            type: String,
            required: true,
        },
        WishListPrice: {
            type: String,
            required: true,
        },
        WishListStockStatus: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const Wish = mongoose.model("Wishlist",WishList);
module.exports = {
    Wish
}