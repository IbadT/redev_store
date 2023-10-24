const Sentry = require('@sentry/node');
const UserInfoServices = require('../services/UserInfoServices.js');
const { validationResult } = require('express-validator');

class UserInfoControllers {

    async getInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const userInfo = await UserInfoServices.getInfo(id);
            if(!userInfo) {
                throw new Error('user doesn\'t have user-info')
            }
            res.send(userInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async createUserInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const data = await UserInfoServices.createUserInfo(id, body);
            res.send(data);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async updateInfo(req, res) {
        try {
            // validationResult(req).throw();
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
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const updateSomeInfo = await UserInfoServices.updateSomeInfo(id, body);
            res.send(updateSomeInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };
};

module.exports = new UserInfoControllers();