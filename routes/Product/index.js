const multer = require('multer');
const express = require("express");
const { addproduct, deleteProduct, getProducts, Category, updateProduct } = require('../../controllers/product');
const { verifyToken } = require('../../middleware/Protected');

const router = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname);
    }
});
const upload = multer({ storage: storage });


router.post('/products', addproduct);
router.delete('/products/:id',  deleteProduct);
router.get('/productslist',getProducts);
router.get('/category/:category',Category);
router.put('/products/:id',updateProduct);






module.exports = router;