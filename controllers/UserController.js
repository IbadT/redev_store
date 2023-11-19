require('dotenv').config();
const Sentry = require('@sentry/node');
const UserServices = require('../services/UserServices.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');



class UserControllers {

     async login(req, res) {
         try {
             validationResult(req).throw();
            const { login, password } = req.body;
            const finderUser = await UserServices.findUserByLogin(login);
                if(finderUser) {
                    const { id } = finderUser;
                    const comparePass = await bcrypt.compare(password, finderUser.password);
                    if(comparePass) {
                        const token = jwt.sign({ id }, process.env.SECRET_ACCESS_TOKEN);
                        return res.send(token);
                    } return res.json({ message: 'invalid token' });
                } return res.sendStatus(401);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };


    async register(req, res) {
        try {
            validationResult(req).throw();
            const { login, password } = req.body;
            const finderUser = await UserServices.findUserByLogin(login);
            if( !finderUser ) {
                const salt = await bcrypt.genSalt(10);
                const hashPass = await bcrypt.hash(password, salt);
                const createdUser = await UserServices.createUser({
                    login, 
                    password: hashPass
                });
                res.send(createdUser);
            } else {
                res.sendStatus(400);
            }
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async logout(req, res) {
        try {
            res.redirect('/');
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }

    async deleteUser(req, res) {

        try {
            const { id } = req.userId;
            const deleteResult = await UserServices.deleteUser(id);
            res.send(deleteResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };
};

module.exports = new UserControllers();