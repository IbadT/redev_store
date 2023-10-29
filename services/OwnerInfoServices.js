const { OwnerInfoModel } = require('../models/_models.js');


class OwnerInfoServices {
    async getOwnerInfo(user_id) {
        return new Promise((res, rej) => {
            OwnerInfoModel.findOne({ where: { user_id } }).then(ownerInfo => {
                if(ownerInfo) {
                    res(ownerInfo);
                } else {
                    rej('Owner info is don\'t added...');
                }
            });
        });
    };

    async addOwnerInfo(user_id, body) {
        return new Promise(async (res, rej) => {
            const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id } })

            if( !ownerInfo ) {
                const addedOwnerInfo = await OwnerInfoModel.create({ ...body, user_id })
                return res(addedOwnerInfo);
            } rej({ message: 'this user already has owner-info'});

        });
    };

    async editOwnerInfo(user_id, body) {
        return new Promise(async (res, rej) => {

            const ownerInfo = await OwnerInfoModel.findOne({ where: { user_id }})

            if(ownerInfo) {
                const editedOwnerInfo = await OwnerInfoModel.update({ ...body, user_id }, { where: { user_id } })

                if( editedOwnerInfo ) {
                    const data = await OwnerInfoModel.findOne({ where: { user_id }});
                    return res(data);
                } return rej({ message: 'Bad Request'})

            } return rej('Owner info is don\'t added...');
        });
    };
};

module.exports = new OwnerInfoServices();