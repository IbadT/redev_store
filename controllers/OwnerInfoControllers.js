const Sentry = require('@sentry/node');
const OwnerInfoServices = require('../services/OwnerInfoServices.js');
const { validationResult } = require('../helpers/validation.js');


class OwnerInfoControllers {

    async getOwnerInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const ownerInfo = await OwnerInfoServices.getOwnerInfo(id);
            res.send(ownerInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async addOwnerInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const addedOwnerInfo = await OwnerInfoServices.addOwnerInfo(id, body);
            res.send(addedOwnerInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async editOwnerInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const editedOwnerInfo = await OwnerInfoServices.editOwnerInfo(id, body);
            res.send(editedOwnerInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }
    
};

module.exports = new OwnerInfoControllers();