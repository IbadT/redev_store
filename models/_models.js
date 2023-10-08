const User = require('./User.js');
const UserInfo = require('./UserInfo.js');
const Requisites = require('./Requisites.js');
const Product = require('./Product.js');
const OwnerInfo = require('./OwnerInfo.js');
const PaymentInfo = require('./PaymentInfo.js');
const Basket = require('./Basket.js');
const OrderHistory = require('./OrderHistory.js');
const BasketProduct = require('./BasketProduct.js');
const PaymentMethods = require('./PaymentMethods.js');
const DeliveryMethods = require('./DeliveryMethods.js');
const OrderStatues = require('./OrderStatuses.js');





User.hasOne(UserInfo, { foreignKey: 'user_id' });
UserInfo.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Requisites, { foreignKey: 'user_id' });
Requisites.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(OrderHistory, { foreignKey: 'user_id' });
OrderHistory.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Basket, { foreignKey: 'user_id' });
Basket.belongsTo(User, { foreignKey: 'user_id' });

Basket.belongsToMany(Product, { through: 'BasketProduct'});
Product.belongsToMany(Basket, { through: 'BasketProduct'});

User.hasOne(OwnerInfo, { foreignKey: 'user_id' });
OwnerInfo.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(PaymentInfo, { foreignKey: 'user_id' });
PaymentInfo.belongsTo(User, { foreignKey: 'user_id' });

OwnerInfo.hasMany(Product, { foreignKey: 'owner_info_id' });
Product.belongsTo(OwnerInfo, { foreignKey: 'owner_info_id' });

Product.hasMany(PaymentInfo, { foreignKey: 'product_id' });
PaymentInfo.belongsTo(Product, { foreignKey: 'product_id' });





(async () => {

    // await User.sync({ force: true }).then(() => {
    //     console.log('User was created...');
    // });

    // await UserInfo.sync({ force: true }).then(() => {
    //     console.log('UserInfo was created...');
    // });

    // await Requisites.sync({ force: true }).then(() => {
    //     console.log('Requisites was created...');
    // });
    
    // await OrderHistory.sync({ force: true }).then(() => {
    //     console.log('OrderHistory was created...');
    // });
    
    // await OwnerInfo.sync({ force: true }).then(() => {
    //     console.log('OwnerInfo was created...');
    // });

    // await Product.sync({ force: true }).then(() => {
    //     console.log('Product was created...');
    // });

    // await Basket.sync({ force: true }).then(() => {
    //     console.log('Basket was created...');
    // });
    
    // await PaymentInfo.sync({ force: true }).then(() => {
    //     console.log('PaymentInfo was created...');
    // });


    // const fs = require('fs');
    // await PaymentMethods.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/paymentMethods.json', 'utf-8', (err, methods) => {
    //         if(err) throw new Error(err);
    //         console.log(methods);
    //         const parseMethods = JSON.parse(methods);
    //         console.log(parseMethods);
    //         for(let i of parseMethods) {
    //             console.log({ methods: i });
    //             PaymentMethods.create({ method: i })
    //         };
    //     })
    // });

    // await DeliveryMethods.sync({ force: true }).then(() => [
    //     fs.readFile('./jsonMethods/deliveryMethods.json', 'utf8', (err, methods) => {
    //         if(err) throw new Error(err);
    //         const parseMethods = JSON.parse(methods);
    //         for(let method of parseMethods) {
    //             DeliveryMethods.create({ method });
    //         }
    //     })
    // ]);

    // await OrderStatues.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/orderStatuses.json', 'utf8', (err, statuses) => {
    //         if(err) throw new Error(err);
    //         const parseStatuses = JSON.parse(statuses);
    //         for(let status of parseStatuses) {
    //             OrderStatues.create({ status });
    //         }
    //     })
    // });

})();




module.exports = {
    User,
    UserInfo,
    Requisites,
    Product,
    OwnerInfo,
    Basket,
    PaymentInfo,
    OrderHistory,
    BasketProduct,
    PaymentMethods,
    DeliveryMethods,
    OrderStatues
};