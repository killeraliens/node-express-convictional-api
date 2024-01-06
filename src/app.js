const express = require('express');
//const { createProxyMiddleware } = require('http-proxy-middleware');
const productRoutes = require('./routes/productRoutes');

const app = express();
//const targetServer = 'https://my-json-server.typicode.com/convictional/engineering-interview-api';

// app.use('/products', createProxyMiddleware({
//     target: targetServer,
//     changeOrigin: true,
// }))
app.use('/products', productRoutes)

app.listen(8080, () => {
    console.log('proxy server running on port 8080')
})

