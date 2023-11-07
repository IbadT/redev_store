const UserModel = require('./UserModel.js');
const UserInfoModel = require('./UserInfoModel.js');
const RequisitesModel = require('./RequisitesModel.js');
const ProductModel = require('./ProductModel.js');
const OwnerInfoModel = require('./OwnerInfoModel.js');
const PaymentInfoModel = require('./PaymentInfoModel.js');
const BasketModel = require('./BasketModel.js');
const OrderHistoryModel = require('./OrderHistoryModel.js');
const BasketProductModel = require('./BasketProductModel.js'); 
const PaymentMethodsModel = require('./PaymentMethodsModel.js');
const DeliveryMethodsModel = require('./DeliveryMethodsModel.js');
const OrderStatusesModel = require('./OrderStatusesModel.js');
const CategoriesModel = require('./CategoriesModel.js');




UserModel.hasOne(UserInfoModel, { foreignKey: 'user_id' });
UserInfoModel.belongsTo(UserModel, { foreignKey: 'user_id' });

UserInfoModel.hasMany(PaymentInfoModel, { foreignKey: 'user_info_id' });
PaymentInfoModel.belongsTo(UserInfoModel, { foreignKey: 'user_info_id' });

PaymentInfoModel.hasOne(PaymentMethodsModel, { foreignKey: 'payment_method_id' });
PaymentMethodsModel.belongsTo(PaymentInfoModel, { foreignKey: 'payment_method_id' });

PaymentInfoModel.hasOne(DeliveryMethodsModel, { foreignKey: 'delivery_method_id' });
DeliveryMethodsModel.belongsTo(PaymentInfoModel, { foreignKey: 'delivery_method_id' });

PaymentInfoModel.hasOne(OrderStatusesModel, { foreignKey: 'order_status_id' });
OrderStatusesModel.belongsTo(PaymentInfoModel, { foreignKey: 'order_status_id' });

UserModel.hasOne(RequisitesModel, { foreignKey: 'user_id' });
RequisitesModel.belongsTo(UserModel, { foreignKey: 'user_id' });

UserModel.hasMany(OrderHistoryModel, { foreignKey: 'user_id' });
OrderHistoryModel.belongsTo(UserModel, { foreignKey: 'user_id' });

UserModel.hasOne(BasketModel, { foreignKey: 'user_id' });
BasketModel.belongsTo(UserModel, { foreignKey: 'user_id' });


// !!!!
PaymentInfoModel.hasOne(OrderHistoryModel, { foreignKey: 'payment_info_id' });
OrderHistoryModel.belongsTo(PaymentInfoModel, { foreignKey: 'payment_info_id' });

// OrderStatusesModel.hasOne(OrderHistoryModel, { foreignKey: 'order_status_id' });
// OrderHistoryModel.belongsTo(OrderStatusesModel, { foreignKey: 'order_status_id' });


CategoriesModel.hasMany(ProductModel, { foreignKey: 'category_id' });
ProductModel.belongsTo(CategoriesModel, { foreignKey: 'category_id' });

BasketModel.belongsToMany(ProductModel, { through: 'BasketProductModel'});
ProductModel.belongsToMany(BasketModel, { through: 'BasketProductModel'});

UserModel.hasOne(OwnerInfoModel, { foreignKey: 'user_id' });
OwnerInfoModel.belongsTo(UserModel, { foreignKey: 'user_id' });

OwnerInfoModel.hasMany(ProductModel, { foreignKey: 'owner_info_id' });
ProductModel.belongsTo(OwnerInfoModel, { foreignKey: 'owner_info_id' });


// первой идет таблица, которая не имеет внешнего ключа !!!!!
BasketModel.hasOne(PaymentInfoModel, { foreignKey: 'basket_id' });
PaymentInfoModel.belongsTo(BasketModel, { foreignKey: 'basket_id' });

UserModel.hasMany(PaymentInfoModel, { foreignKey: 'user_id' });
PaymentInfoModel.belongsTo(UserModel, { foreignKey: 'user_id' });






(async () => {

    const fs = require('fs');

    // await UserModel.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/users.json', 'utf8', (err, users_json) => {
    //         if(err) throw new Error(err);
    //         const parseUsers = JSON.parse(users_json);
    //         for(let user of parseUsers) {
    //             UserModel.create(user);
    //         };
    //     });
    // }).catch(err => console.log(err));;

    // await UserInfoModel.sync({ force: true }).then(() => {
    //     console.log('UserInfo was created...');
    // }).catch(err => console.log(err));

    // await RequisitesModel.sync({ force: true }).then(() => {
    //     console.log('Requisites was created...');
    // }).catch(err => console.log(err));
    
    // await OwnerInfoModel.sync({ force: true }).then(() => {
    //     console.log('OwnerInfo was created...');
    //     fs.readFile('./jsonMethods/ownerInfo.json', 'utf8', (err, ownerInfo_json) => {
    //         if(err) throw new Error(err);
    //         const parseOwnerInfos = JSON.parse(ownerInfo_json);
    //         for(let ownerInfo of parseOwnerInfos) {
    //             OwnerInfoModel.create(ownerInfo);
    //         };
    //     });
    // }).catch(err => console.log(err));

    // await BasketModel.sync({ force: true }).then(() => {
    //     console.log('Basket was created...');
    // }).catch(err => console.log(err));



    // await CategoriesModel.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/productCategories.json', 'utf8', (err, category_name_json) => {
    //         if(err) throw new Error(err);
    //         const parseCategory_name = JSON.parse(category_name_json);
    //         for(let category_name of parseCategory_name) {
    //             CategoriesModel.create({ category_name });
    //         };
    //     });
    // }).catch(err => console.log(err));
    
    // await ProductModel.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/products.json', 'utf8', async (err, products_json) => {
    //         if(err) throw new Error(err);
    //         const parseProducts = JSON.parse(products_json);
    //         await Promise.all(parseProducts.map(async product => {
    //             return await ProductModel.create(product)

    //         })).then(data => console.log(data.id)).catch(err => console.error(err));
    //     });
    // });

    // await BasketProductModel.sync({ force: true }).then(() => {
    //     console.log('BasketProductModel was created...');
    // }).catch(err => console.log(err));; 

    
    // await PaymentMethodsModel.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/paymentMethods.json', 'utf8', (err, methods) => {
    //         if(err) throw new Error(err);
    //         const parseMethods = JSON.parse(methods);
    //         for(let method of parseMethods) {
    //             PaymentMethodsModel.create({ method })
    //         };
    //     });
    // }).catch(err => console.log(err));
    
    // await DeliveryMethodsModel.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/deliveryMethods.json', 'utf8', (err, methods) => {
    //         if(err) throw new Error(err);
    //         const parseMethods = JSON.parse(methods);
    //         for(let method of parseMethods) {
    //             DeliveryMethodsModel.create({ method });
    //         };
    //     })
    // }).catch(err => console.log(err));
    
    // await OrderStatusesModel.sync({ force: true }).then(() => {
    //     fs.readFile('./jsonMethods/orderStatuses.json', 'utf8', (err, statuses) => {
    //         if(err) throw new Error(err);
    //         const parseStatuses = JSON.parse(statuses);
    //         for(let status of parseStatuses) {
    //             OrderStatusesModel.create({ status });
    //         };
    //     });
    // }).catch(err => console.log(err));
    
    // await PaymentInfoModel.sync({ force: true }).then(() => {
    //     console.log('PaymentInfo was created...');
    // }).catch(err => console.log(err));
    
    // await OrderHistoryModel.sync({ force: true }).then(() => {
    //     console.log('OrderHistory was created...');
    // }).catch(err => console.log(err));
    
})();




module.exports = {
    UserModel,
    UserInfoModel,
    RequisitesModel,
    ProductModel,
    OwnerInfoModel,
    BasketModel,
    PaymentInfoModel,
    OrderHistoryModel,
    BasketProductModel,
    PaymentMethodsModel,
    DeliveryMethodsModel,
    OrderStatusesModel,
    CategoriesModel
};