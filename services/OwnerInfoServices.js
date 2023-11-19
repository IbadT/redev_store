const { OwnerInfoModel, ProductModel } = require('../models/_models.js');


class OwnerInfoServices { // done

    async getOwnerInfo(user_id) {

        const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id } });
        if(ownerInfo) {
            return ownerInfo;
        } 
        throw new Error('Owner info is don\'t added...')
            // return { message: 'Owner info is don\'t added...' };

    };

    async addOwnerInfo(user_id, body) {
        
        const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id } })

        if( !ownerInfo ) {
            const addedOwnerInfo = await OwnerInfoModel.create({ ...body, user_id })
            return addedOwnerInfo;
        } 
        return { message: 'this user already has owner-info'};

    };

    async editOwnerInfo(user_id, body) {

        const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id }})

        if(ownerInfo) {
            const editedOwnerInfo = await OwnerInfoModel.update({ ...body }, { where: { user_id } })

            if( editedOwnerInfo ) {
                const data = await OwnerInfoModel.findOne({ where: { user_id }});
                return data;
            } return { message: 'Bad Request'}

        } 
        throw new Error('Owner info is don\'t added...')
        // return { message: 'Owner info is don\'t added...' };
    };

    async deleteOwnerInfo(user_id) {
        const { id } = await OwnerInfoModel.findOne({ where: { user_id }});
        if(id) {
            const products_array = await ProductModel.findAll({ where: { owner_info_id: id }, limit: 3});
            let products_array_id = [];
            for(let product of products_array) {
                products_array_id.push(product.id);
            }

            const promise = await Promise.all(
                products_array_id.map(async id => {
                    const deletedProduct = await ProductModel.destroy({ where: { id } });
                    return deletedProduct;
                })
            )
            return promise; // update - promise
        } throw new Error("Error with delete owner...");
    }
};

module.exports = new OwnerInfoServices();