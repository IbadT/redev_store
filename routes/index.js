const router = require('express').Router();

const authorization = require('./authorization.js');
router.use('/authorization', authorization);

const userInfo = require('./userInfoRoutes.js');
router.use('/user-info', userInfo);

const requisites = require('./requisitesRoutes.js');
router.use('/requisites', requisites);

const products = require('./productRoutes.js');
router.use('/products', products);

const ownerInfo = require('./ownerInfoRoutes.js');
router.use('/owner-info', ownerInfo);

const orderHistory = require('./orderHistoryRoutes.js');
router.use('/order-history', orderHistory);

const basket = require('./basketRoutes.js');
router.use('/basket', basket);

const paymentInfo = require('./paymentInfoRoutes.js');
router.use('/payment-info', paymentInfo);

module.exports = router;