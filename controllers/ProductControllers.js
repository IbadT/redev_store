const Sentry = require('@sentry/node');
const ProductServices = require('../services/ProductServices.js');

class ProductControllers {

    async getAllProduct(req, res) {
        try {
            const products = await ProductServices.getAllProduct();
            res.send(products);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }; 

    async getProductById(req, res) {
        try {
            const { id } = req.body;
            const product = await ProductServices.getProductById(id);
            res.send(product);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }; 

    async addProduct(req, res) {
        try {
            const { body } = req;
            const createdProduct = await ProductServices.addProduct(body);
            res.send(createdProduct);
        } catch (error) {
            // Sentry.captureException(error);
            res.json(error);
        }
    };

    async updateSomeProduct(req, res) {
        try {
            const { body } = req;
            const { id } = req.query;
            const updatedProduct = await ProductServices.updateSomeProduct(id, body);
            res.send(updatedProduct);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async deleteProductById(req, res) {
        try {
            const { id } = req.query;
            const deleteResult = await ProductServices.deleteProductById(id);
            res.send(deleteResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

};

module.exports = new ProductControllers();