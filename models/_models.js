const User = require('./User.js');
const UserInfo = require('./UserInfo.js');
const Requisites = require('./Requisites.js');
const Product = require('./Product.js');
const OwnerInfo = require('./OwnerInfo.js');
const PaymentMethod = require('./PaymentInfo.js');
const Basket = require('./Basket.js');
const OrderHistory = require('./OrderHistory.js');


User.hasOne(UserInfo, { foreignKey: 'user_id' });
UserInfo.belongsTo(User, { foreignKey: 'user_id'});

User.hasOne(Requisites, { foreignKey: 'user_id' });
Requisites.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(OrderHistory, { foreignKey: 'user_id' });
OrderHistory.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(PaymentInfo, { foreignKey: 'user_id'});
PaymentMethod.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(OwnerInfo, { foreignKey: 'user_id' });
OwnerInfo.belongsTo(User, { foreignKey: 'user_id' });

OwnerInfo.hasMany(UserInfo, { foreignKey: 'user_info_id' });
UserInfo.belongsTo(OwnerInfo, { foreignKey: 'user_info_id' });




module.exports = {
    User,
    UserInfo,
    Requisites,
    Product,
    OwnerInfo,
    PaymentMethod,
    Basket,
    PaymentInfo
}