const { ProductModel, OwnerInfoModel } = require('../models/_models.js');

class ProductServices { // done

    async getAllProduct() {

        const products = await ProductModel.findAll({ where: {} });
        return products;
        
    }; 

    async searchByCategory(category_id) {

        const products = await ProductModel.findAll({ where: { category_id }})
        return products;

    };

    async searchByPrice(max) {

        const products = await ProductModel.findAll( { where: {}, order: [['price', max ? 'DESC' : 'ASC']] } )
        return products;

    };

    async searchByCreated(createdMax, category) {

        const category_id = category ? category : {};
            
        const products = await  ProductModel.findAll({ where: { category_id }, order: [['createdAt', createdMax ? 'DESC' : 'ASC']] })
        return products;

    };

    async searchByCount(maxCount, category) {

        const category_id = category ? category : {};

        const products = await ProductModel.findAll({ where: category_id, order: [['count', maxCount ? 'DESC' : 'ASC']] })
        return products;

    }

    async getProductById(id) {

        const product = await ProductModel.findOne({ where: { id }})
        return product;
        
    }; 

    async addProduct(user_id, body) {

        const owner_info = await OwnerInfoModel.findOne({ where: { user_id }});

        const { id } = owner_info;
        const product = {...body, owner_info_id: id};

        const createdProduct = await ProductModel.create(product);
        return createdProduct;

    };

    async updateSomeProduct(id, body) {

        const updatedProductStatus = await ProductModel.update(body, { where: { id }});

        if(updatedProductStatus[0]) {

            const product = await ProductModel.findOne({ where: { id }});
            return product;

        } return {message: 'Product doesn\'t was updated'};
    };

    async deleteProductById(id) {

        const deleteResult = await ProductModel.destroy({ where: { id }});
        return deleteResult;

    };

};

module.exports = new ProductServices();