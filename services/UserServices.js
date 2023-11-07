const { UserModel, OwnerInfoModel, RequisitesModel } = require('../models/_models.js');


class UserServices { // done
    
    async findUserByLogin(login) {

        const user = await UserModel.findOne({ where: { login }});
        return user;

    };


    async createUser(obj) {

        const createdUser = await UserModel.create(obj);
        return createdUser;
    };


    async deleteUser(user_id) {     

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
        return ownerInfoDeleteResult;

    };
};

module.exports = new UserServices();