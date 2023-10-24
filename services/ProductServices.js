const { ProductModel, OwnerInfoModel } = require('../models/_models.js');

class ProductServices {

    async getAllProduct() {
        return new Promise((res, rej) => {
            ProductModel.findAll({ where: {}}).then(products => {
                res(products);
            });
        });
    }; 

    async searchByCategory(category_id) {
        return new Promise((res, rej) => {
            ProductModel.findAll({ where: { category_id }}).then(products => {
                res(products);
            });
        });
    };

    async searchByPrice(max) {
        return new Promise((res, rej) => {
            ProductModel.findAll( { where: {}, order: [['price', max ? 'DESC' : 'ASC']] } )
                .then(products => {
                    res(products); 
                }
            ).catch(err => rej(err));
        })
    };

    async searchByCreated(createdMax, category) {
        return new Promise((res, rej) => {

            const category_id = category ? category : {};
            
            return ProductModel.findAll({ where: { category_id }, order: [['createdAt', createdMax ? 'DESC' : 'ASC']] })
                .then(products => {
                    res(products);
                }
            ).catch(err => rej(err));
        })
    };

    async searchByCount(maxCount, category) {
        return new Promise((res, rej) => {

            const category_id = category ? category : {};

            ProductModel.findAll({ where: category_id, order: [['count', maxCount ? 'DESC' : 'ASC']] })
                .then(products => {
                    res(products);
                }
            ).catch(err => rej(err));
        })
    }

    async getProductById(id) {
        return new Promise((res, rej) => {
            ProductModel.findOne({ where: { id }}).then(product => {
                res(product);
            });
        });
    }; 

    async addProduct(user_id, body) {
        return new Promise((res, rej) => {
            OwnerInfoModel.findOne({ where: { user_id }}).then(owner_info => {
                const { id } = owner_info;
                const product = {...body, owner_info_id: id};
                ProductModel.create(product).then(createdProduct => res(createdProduct))
            })
        });
    };

    async updateSomeProduct(id, body) {
        return new Promise((res, rej) => {
            ProductModel.update(body, { where: { id }}).then(updatedProductStatus => {
                if(updatedProductStatus[0]) {
                    return ProductModel.findOne({ where: { id }}).then(product => res(product));
                } res('Product doesn\'t was updated');
            });
        });
    };

    async deleteProductById(id) {
        return new Promise((res, rej) => {
            ProductModel.destroy({ where: { id }}).then(deleteResult => {
                res(deleteResult);
            });
        });
    };

};

module.exports = new ProductServices();