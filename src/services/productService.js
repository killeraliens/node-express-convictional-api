const axios = require('axios');
const BASE_URL = "https://my-json-server.typicode.com/convictional/engineering-interview-api"

class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

async function getAllProductsFromConvictional(req, res) {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch(error) {
        throw new CustomError('Failed to fetch products from Convictional', 500);
    }
}

async function getProductByIdFromConvictional(productId) {
    try {
        //const id = parseInt(productId);
        // if (isNaN(id)) {
        //     throw new CustomError('Invalid ID supplied', 400);
        // }

        const response = await axios.get(`${BASE_URL}/products/${productId}`);
        if (!response.data) {
            throw new CustomError('Product not found', 404);
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new CustomError('Product not found', 404);
        }
        throw new CustomError('Failed to fetch product', 500);
    }
}

module.exports = {getAllProductsFromConvictional, getProductByIdFromConvictional}