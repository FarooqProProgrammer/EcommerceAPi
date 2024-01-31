var Product = require('../../models/Product/index')


const addproduct = async (req, res) => {
    const { name, price, description, category,imageUrl } = req.body;
    console.log(name)
    console.log(price)
    console.log(description)

  


    try {
        const product = new Product({
            name,
            price,
            description,
            imageUrl,
            category
        });

        await product.save();
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


const getProducts = async (req, res) => {
    const data = await Product.find();
    res.send(data)
}


const Category = async (req, res) => {
    const { category } = req.params;
    const product = await Product.findOne({ category: category });
    console.log(product)
    res.send(product)

}




const updateProduct = async (req, res) => {
    const { _id } = req.params;
    const { name } = req.body;

    console.log(name)

    const updatedProduct = await Product.findByIdAndUpdate(_id, { name: name });
    res.send(updatedProduct)
}


module.exports = {
    addproduct,
    deleteProduct,
    getProducts,
    Category,
    updateProduct
}