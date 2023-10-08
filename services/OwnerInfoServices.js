const { OwnerInfo } = require('../models/_models.js');


class OwnerInfoServices {
    async getOwnerInfo(id) {
        return new Promise((res, rej) => {
            OwnerInfo.findOne({ where: { id: id}}).then(ownerInfo => {
                res(ownerInfo);
            });
        });
    };

    async addOwnerInfo(id, body) { // check body
        return new Promise((res, rej) => {
            OwnerInfo.create(body).then(addedOwnerInfo => {
                res.send(addedOwnerInfo);
            });
        });
    };

    async editOwnerInfo(id, body) {
        return new Promise((res, rej) => {
            OwnerInfo.update({ where: { user_id: id}, body}).then(editedOwnerInfo => {
                res(editedOwnerInfo);
            });
        });
    };
};

module.exports = new OwnerInfoServices();