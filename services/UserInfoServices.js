const { UserInfoModel } = require('../models/_models.js');

class UserInfoServices { // done

    async getInfo(user_id) {
            
        const userInfo = await UserInfoModel.findOne({ where: { user_id }});
        if(userInfo) {
            return userInfo; // return ???
        } return { message: 'User don\'t added user-info' };
    };

    async createUserInfo(user_id, body) {

        const userInfo = await UserInfoModel.findOne({ where: { user_id } });
        if(userInfo) {
            return { message: 'User info is already added' }; // return ???
        }
                
        const createdData = await UserInfoModel.create({ ...body, user_id });
        return createdData;
        
    };

    async updateInfo(user_id, body) {

        const updatedStatus = await UserInfoModel.update(body, { where: { user_id } });

        if( updatedStatus[0] ) {

            const data = await UserInfoModel.findOne({ where: { user_id }});
            return data;

        } return { message: 'Bad Request' };

    };

    async updateSomeInfo(user_id, body) {

        const updatedStatus = await UserInfoModel.update(body, { where: { user_id } });

        if( updatedStatus[0] ) {

            const updatedInfo = await UserInfoModel.findOne({ where: { user_id }});
            return (updatedInfo); // return ???

        } return updatedStatus;

    };

};

module.exports = new UserInfoServices();