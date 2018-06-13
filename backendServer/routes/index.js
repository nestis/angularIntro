const routes = require('express').Router();
const Mocks = require('./mocks');

routes.get('/categories', (req, res) => {
    res.status(200).json(Mocks.Categories);
});

routes.get('/products/:categoryId', (req, res) => {
    const catProducts = Mocks.Products.filter(p => p.category === parseInt(req.params.categoryId));
    res.status(200).json(catProducts);
});

routes.get('/products', (req, res) => {
    res.status(200).json(Mocks.Products);
});


module.exports = routes;