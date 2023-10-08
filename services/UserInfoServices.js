const { UserInfo } = require('../models/UserInfo.js');

class UserInfoServices {
    async getInfo(id) {
        return new Promise((res, rej) => {
            UserInfo.findOne({ where: { id: id }}).then(userInfo => {
                res(userInfo);
            });
        });
    };

    async createUserInfo(body) {
        return new Promise((res, rej) => {
            UserInfo.create(body).then(createdData => {
                res(createdData);
            });
        });
    };

    async updateInfo(id, body) {
        return new Promise((res, rej) => {
            UserInfo.update({ where: { id: id}, body}).then(updatedInfo => {
                res(updatedInfo);
            });
        });
    };

    async updateSomeInfo(id, body) {
        return new Promise((res, rej) => {
            UserInfo.update({ where: { id: id }, body}).then(updatedSomeInfo => {
                res(updatedSomeInfo);
            });
        });
    };
};

module.exports = new UserInfoServices();