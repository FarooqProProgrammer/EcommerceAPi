const WishListModel = require("../../models/Wishlist/index");



const WishListSave = async (req,res) => {
    
  
    try {
        const {
            AuthorID,
            WishListImage,
            WishListProductName,
            WishListPrice,
            WishListStockStatus
        } = req.body;
    
    
        if(!AuthorID || !WishListImage || !WishListProductName || !WishListPrice || !WishListStockStatus) {
            res.status(400).send({ 'message': 'All Fields Required' })
        }
    
        const WishListSave = new WishListModel({
            AuthorID,
            WishListImage,
            WishListProductName,
            WishListPrice,
            WishListStockStatus
        })
    
        await WishListSave.save();
        
        
    }catch(err) {
        res.status(400).send({'Message':"Internal Server Error",err})

    }
}


module.exports = { 
    WishListSave
}