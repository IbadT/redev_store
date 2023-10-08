const Sentry = require('@sentry/node');
const UserInfoServices = require('../services/UserInfoServices.js');

class UserInfoControllers {
    async getInfo(req, res) {
        try {
            const { id } = req.userId;
            const userInfo = await UserInfoServices.getInfo(id);
            res.send(userInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async createUserInfo(req, res) {
        try {
            const { body } = req;
            const data = UserInfoServices.createUserInfo(body);
            res.send(data);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async updateInfo(req, res) {
        try {
            const { id } = req.userId;
            const { body } = req;
            const updatedInfo = await UserInfoServices.updateInfo(id, body);
            res.send(updatedInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async updateSomeInfo(req, res) {
        try {
            const { id } = req.userId;
            const { body } = req;
            const updateSomeInfo = await UserInfoServices.updateSomeInfo(id, body);
            return updateSomeInfo;
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };
};

module.exports = new UserInfoControllers();