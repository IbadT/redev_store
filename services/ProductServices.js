const { Basket, Product } = require('../models/_models.js');

class ProductServices {

    async getAllProduct() {
        return new Promise((res, rej) => {
            Product.findAll({ where: {}}).then(products => {
                res(products);
            });
        });
    }; 

    async getProductById(id) {
        return new Promise((res, rej) => {
            Product.findOne({ where: { id }}).then(product => {
                res(product);
            });
        });
    }; 

    async addProduct(body) {
        return new Promise((res, rej) => {
            Product.create(body).then(createdProduct => {
                res(createdProduct);
            });
        });
    };

    async updateSomeProduct(id, body) {
        return new Promise((res, rej) => {
            Product.update(body, { where: { id }}).then(updatedProduct => {
                res(updatedProduct);
            });
        });
    };

    async deleteProductById(id) {
        return new Promise((res, rej) => {
            Product.destroy({ where: { id }}).then(deleteResult => {
                res(deleteResult);
            });
        });
    };

};

module.exports = new ProductServices();