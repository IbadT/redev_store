const Sentry = require('@sentry/node');
const ProductServices = require('../services/ProductServices.js');
// const { validationResult } = require('../helpers/validation.js');

class ProductControllers {

    async getAllProduct(req, res) {
        try {
            // validationResult(req).throw();
            const products = await ProductServices.getAllProduct();
            if(products.length > 1) {
                return res.send(products);
            } throw new Error('Products is not added...')
        } catch (error) {
            Sentry.captureException(error);
            res.json({error: error.message});
        };
    }; 

    async searchByCategory(req, res) {
        try {
            // validationResult(req).throw();
            const { category_id } = req.params;
            const searchingProducts = await ProductServices.searchByCategory(category_id);
            res.send(searchingProducts);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }

    async searchByPrice(req, res) {
        try {
            // validationResult(req).throw();
            const { max } = req.query;
            const searchingProducts = await ProductServices.searchByPrice(max);
            res.send(searchingProducts);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async searchByCreated(req, res) {
        try {
            // validationResult(req).throw();
            const { createdMax, category_id } = req.query;
            const searchingProductsByCreated = await ProductServices.searchByCreated(createdMax, category_id);
            res.send(searchingProductsByCreated);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async searchByCount(req, res) {
        try {
            // validationResult(req).throw();
            const { maxCount } = req.params;
            const { category_id } = req.query;
            const searchingProductsByCount = await ProductServices.searchByCount(maxCount, category_id);
            res.send(searchingProductsByCount);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }

    async getProductById(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.params;
            const product = await ProductServices.getProductById(id);
            res.send(product);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    }; 

    async addProduct(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const createdProduct = await ProductServices.addProduct(id, body);
            res.send(createdProduct)
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async updateSomeProduct(req, res) {
        try {
            // validationResult(req).throw();
            const { body } = req;
            const { id } = req.params;
            const updatedProduct = await ProductServices.updateSomeProduct(id, body);
            res.send(updatedProduct);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async deleteProductById(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.params;
            const deleteResult = await ProductServices.deleteProductById(id);
            res.send({ result: deleteResult });
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

};

module.exports = new ProductControllers();