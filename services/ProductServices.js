const { ProductModel, OwnerInfoModel } = require('../models/_models.js');

class ProductServices {

    async getAllProduct() {
        return new Promise(async (res, rej) => {

            const products = await ProductModel.findAll({ where: {}})
            res(products);
        
        });
    }; 

    async searchByCategory(category_id) {
        return new Promise(async (res, rej) => {

            const products = await ProductModel.findAll({ where: { category_id }})
            res(products);

        });
    };

    async searchByPrice(max) {
        return new Promise(async (res, rej) => {

            const products = await ProductModel.findAll( { where: {}, order: [['price', max ? 'DESC' : 'ASC']] } )
            res(products);

        });
    };

    async searchByCreated(createdMax, category) {
        return new Promise(async (res, rej) => {

            const category_id = category ? category : {};
            
            const products = await  ProductModel.findAll({ where: { category_id }, order: [['createdAt', createdMax ? 'DESC' : 'ASC']] })
            res(products);

        });
    };

    async searchByCount(maxCount, category) {
        return new Promise(async (res, rej) => {

            const category_id = category ? category : {};

            const products = await ProductModel.findAll({ where: category_id, order: [['count', maxCount ? 'DESC' : 'ASC']] })
            res(products);

        })
    }

    async getProductById(id) {
        return new Promise(async (res, rej) => {

            const product = await ProductModel.findOne({ where: { id }})
            res(product);
        
        });
    }; 

    async addProduct(user_id, body) {
        return new Promise(async (res, rej) => {

            const owner_info = await OwnerInfoModel.findOne({ where: { user_id }});

            const { id } = owner_info;
            const product = {...body, owner_info_id: id};

            const createdProduct = await ProductModel.create(product);
            res(createdProduct);

        });
    };

    async updateSomeProduct(id, body) {
        return new Promise(async (res, rej) => {

            const updatedProductStatus = await ProductModel.update(body, { where: { id }});

            if(updatedProductStatus[0]) {

                const product = await ProductModel.findOne({ where: { id }});
                return res(product);

            } res('Product doesn\'t was updated');
        });
    };

    async deleteProductById(id) {
        return new Promise(async (res, rej) => {

            const deleteResult = await ProductModel.destroy({ where: { id }});
            res(deleteResult);

        });
    };

};

module.exports = new ProductServices();