const { UserModel, OwnerInfoModel, RequisitesModel } = require('../models/_models.js');


class UserServices {
    
    async findUserByLogin(login) {
        return new Promise((res, rej) => {
            UserModel.findOne({ where: { login }}).then(user => res(user));
        });
    };

    async createUser(obj) {
        return new Promise((res, rej) => {
            UserModel.create(obj).then(createdUser => res(createdUser));
        });
    };

    async deleteUser(user_id) {     
        return new Promise((res, rej) => {
            const owner = OwnerInfoModel.findOne({ where: { user_id }});
            UserModel.delete({ where: { user_id }}).then(deleteResult => {
                if(deleteResult && owner) {
                    OwnerInfoModel.delete({ where: { user_id }}).then(result => console.log('owner info: ', result));
                    RequisitesModel.delete({ where: { user_id }}).then(result => console.log('requisites: ', result));
                    // delete Product because user-owner was deleted
                    // delete OrdersHistory because user-owner and justing user was deleted
                }
                OwnerInfoModel.delete({ where: { user_id }}).then(result => console.log('user info: ', result));
                res(deleteResult);
            });
        });
    };
};

module.exports = new UserServices();