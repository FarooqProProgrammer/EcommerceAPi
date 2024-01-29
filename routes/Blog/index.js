const express = require("express");
const { BlogSave, GetBlog } = require("../../controllers/Blog");

const router = express.Router();



router.post('/add-blog',BlogSave);
router.get('/get-blog',GetBlog);



module.exports = router;