const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.get('/', ProductController.getAllProducts);
router.get('/:id', validateProductId, ProductController.getProductById)

function validateProductId(req, res, next) {
    const productId = req.params.id;
    if (!productId || !/^\d+$/.test(productId)) {
        return res.status(400).json({error: 'Invalid ID supplied'})
    }
    next();
}

module.exports = router;