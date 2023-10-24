const { ProductModel } = require('../models/_models.js');

async function findProductAndUpdate(id) {
    await ProductModel.findOne({ where: { id }}).then(async product => {
        if(product) {
            let { count } = product;
            count+=1;
            console.log(count);
            await ProductModel.update( { count }, { where: { id }} ).then(result => console.log('update ', result));
        }
        return false;
    });
};

module.exports = findProductAndUpdate;