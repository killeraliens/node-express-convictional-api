const ProductService = require('../services/productService');
const ProductAdapter = require('../adapters/productAdapter');

async function getAllProducts(req, res) {
    try {
        const rawProductData = await ProductService.getAllProductsFromConvictional();
        const formattedProducts = ProductAdapter.formatProductsFromConvictional(rawProductData);
        res.status(200).json(formattedProducts);
    } catch(error) {
        res.status(500).json({ error: { message: 'Internal server error' }});
    }
}

async function getProductById(req, res) {
    try {
        const productId = req.params.id;
        const rawProductData = await ProductService.getProductByIdFromConvictional(productId);
        const formattedProduct = ProductAdapter.formatProductFromConvictional(rawProductData);
        res.status(200).json(formattedProduct);
    } catch (error) {
        if (error instanceof CustomError) {
            // an error thrown by the service
            res.status(error.statusCode).json({ error: { message: error.message }});
        } else {
            // unexpected errors
            res.status(500).json({ error: { message: 'Internal server error' }});
        }
    }
}

module.exports = { getAllProducts, getProductById};