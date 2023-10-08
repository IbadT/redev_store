const { User } = require('../models/User.js');
const { OwnerInfo, Requisites, UserInfo } = require('../models/_models.js');


class UserServices {
    async findUserByLogin(login) {
        return new Promise((res, rej) => {
            User.findOne({ where: { login: login }}).then(user => res(user));
        });
    };

    async createUser(obj) {
        return new Promise((res, rej) => {
            User.create(obj).then(createdUser => res(createdUser));
        });
    };

    async deleteUser(id) {
        return new Promise((res, rej) => {
            // const owner = User.findOne({ where: { id, owner: true}});
            const owner = User.findOne({ where: { id }});
            User.delete({ where: { id }}).then(deleteResult => {
                if(deleteResult && owner) {
                    OwnerInfo.delete({ where: { user_id: id }}).then(result => console.log('owner info: ', result));
                    Requisites.delete({ where: { user_id: id}}).then(result => console.log('requisites: ', result));
                    // delete Product because user-owner was deleted
                    // delete OrdersHistory because user-owner and justing user was deleted
                }
                UserInfo.delete({ where: { user_id: id }}).then(result => console.log('user info: ', result));
                res(deleteResult);
            });
        });
    };
};

module.exports = new UserServices();