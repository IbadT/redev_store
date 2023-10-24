const { UserInfoModel } = require('../models/_models.js');

class UserInfoServices {

    async getInfo(user_id) {
        return new Promise((res, rej) => {
            UserInfoModel.findOne({ where: { user_id }}).then(userInfo => {
                if(userInfo) {
                    res(userInfo);
                } rej('User don\'t added user-info');
            });
        });
    };

    async createUserInfo(user_id, body) {
        return new Promise((res, rej) => {
            UserInfoModel.findOne({ where: { user_id } }).then(userInfo => {
                if(userInfo) {
                    rej('User info is already added');
                }
                UserInfoModel.create({ ...body, user_id }).then(createdData => {
                    res(createdData);
                });
            });
        });
    };

    async updateInfo(user_id, body) {
        return new Promise((res, rej) => {
            UserInfoModel.update(body, { where: { user_id } }).then(updatedStatus => {
                if( updatedStatus[0] ) {
                    return UserInfoModel.findOne({ where: { user_id }}).then(data => res(data));
                } rej('Bad Request');
            });
        });
    };

    async updateSomeInfo(user_id, body) {
        return new Promise((res, rej) => {
            UserInfoModel.update(body, { where: { user_id } }).then(updatedStatus => {
                if( updatedStatus[0] ) {
                    return UserInfoModel.findOne({ where: { user_id }}).then(updatedInfo => res(updatedInfo));
                } rej(updatedStatus);
            });
        });
    };

};

module.exports = new UserInfoServices();