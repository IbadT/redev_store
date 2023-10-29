const { UserModel, OwnerInfoModel, RequisitesModel } = require('../models/_models.js');


class UserServices {
    
    async findUserByLogin(login) {
        return new Promise(async (res, rej) => {

            const user = await UserModel.findOne({ where: { login }});
            res(user);

        });
    };

    async createUser(obj) {
        return new Promise(async (res, rej) => {

            const createdUser = await UserModel.create(obj);
            res(createdUser);
        });
    };

    async deleteUser(user_id) {     
        return new Promise(async (res, rej) => {

            const owner = await OwnerInfoModel.findOne({ where: { user_id }});

            const deleteResult = await UserModel.delete({ where: { user_id }});

            if(deleteResult && owner) {
                const ownerInfoDeleteResult = await OwnerInfoModel.delete({ where: { user_id }});
                console.log('owner info: ', ownerInfoDeleteResult);

                const requisitesDeleteResul = await RequisitesModel.delete({ where: { user_id }});
                console.log('requisites: ', requisitesDeleteResul);

                // delete Product because user-owner was deleted
                // delete OrdersHistory because user-owner and justing user was deleted
            }
            const ownerInfoDeleteResult = await OwnerInfoModel.delete({ where: { user_id }});
            console.log('user info: ', ownerInfoDeleteResult);
            res(ownerInfoDeleteResult);

        });
    };
};

module.exports = new UserServices();