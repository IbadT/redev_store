const { OwnerInfoModel } = require('../models/_models.js');


class OwnerInfoServices { // done

    async getOwnerInfo(user_id) {

        const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id } });
            if(ownerInfo) {
                return ownerInfo;
            } else {
                return { message: 'Owner info is don\'t added...' };
            }

    };

    async addOwnerInfo(user_id, body) {
        
        const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id } })

        if( !ownerInfo ) {
            const addedOwnerInfo = await OwnerInfoModel.create({ ...body, user_id })
            return addedOwnerInfo;
        } return { message: 'this user already has owner-info'};

    };

    async editOwnerInfo(user_id, body) {

        const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id }})

        if(ownerInfo) {
            const editedOwnerInfo = await OwnerInfoModel.update({ ...body }, { where: { user_id } })

            if( editedOwnerInfo ) {
                const data = await OwnerInfoModel.findOne({ where: { user_id }});
                return data;
            } return { message: 'Bad Request'}

        } return { message: 'Owner info is don\'t added...' };
    };
};

module.exports = new OwnerInfoServices();