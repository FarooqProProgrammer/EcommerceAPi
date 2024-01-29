const express = require('express');
const { WishListSave } = require('../../controllers/WishList');



const router = express.Router();

router.post('/WishListSave',WishListSave)

module.exports =  router;