const Blog = require('../../models/Blog/index');


const BlogSave = async (req, res) => {
    const { title, Author, BlogImage, BlogDesc, Tags, Comment, Category } = req.body;
    try {
        if (!title || !Author || !BlogImage || !BlogDesc || !Tags || !Comment || !Category) {
            res.status(400).send({ 'message': 'All Fields Required' })
        }

        const BlogApp = new Blog(
            {
                title: title,
                Author,
                BlogImage,
                BlogDesc,
                Tags,
                Comment,
                Category
            }
        )
        await BlogApp.save();
    }
    catch (err) {
        res.status(400).send({ 'Message': "Internal Server Error" })
    }

}

const GetBlog = async (req,res) => {
    try {
        const Blog = await Blog.find();
        res.json(Blog);
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    BlogSave,
    GetBlog
}