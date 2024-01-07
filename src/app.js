const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
//const rateLimit = require('express-rate-limit')
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(helmet());
app.use(cors());
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, //15min
//     max: 100 //limits requests per IP
// })
// app.use(limiter);

app.use('/products', productRoutes)

app.listen(8080, () => {
    console.log('proxy server running on port 8080')
})

