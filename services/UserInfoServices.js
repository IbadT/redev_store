const { UserInfoModel } = require('../models/_models.js');

class UserInfoServices {

    async getInfo(user_id) {
        return new Promise(async (res, rej) => {
            
            const userInfo = await UserInfoModel.findOne({ where: { user_id }});
            if(userInfo) {
                res(userInfo); // return ???
            } rej('User don\'t added user-info');
        });
    };

    async createUserInfo(user_id, body) {
        return new Promise(async (res, rej) => {

            const userInfo = await UserInfoModel.findOne({ where: { user_id } });
            if(userInfo) {
                rej('User info is already added'); // return ???
            }
                
            const createdData = await UserInfoModel.create({ ...body, user_id });
            res(createdData);
        
        });
    };

    async updateInfo(user_id, body) {
        return new Promise(async (res, rej) => {

            const updatedStatus = await UserInfoModel.update(body, { where: { user_id } });

            if( updatedStatus[0] ) {

                const data = await UserInfoModel.findOne({ where: { user_id }});
                res(data);

            } rej('Bad Request');

        });
    };

    async updateSomeInfo(user_id, body) {
        return new Promise(async (res, rej) => {

            const updatedStatus = await UserInfoModel.update(body, { where: { user_id } });

            if( updatedStatus[0] ) {

                const updatedInfo = await UserInfoModel.findOne({ where: { user_id }});
                res(updatedInfo); // return ???

            } rej(updatedStatus);

        });
    };

};

module.exports = new UserInfoServices();