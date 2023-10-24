const router = require('express').Router();

const authorizationRoutes = require('./authorizationRoutes.js');
router.use('/authorization', authorizationRoutes); // done

const userInfoRoutes = require('./userInfoRoutes.js');
router.use('/user-info', userInfoRoutes); // done

const requisitesRoutes = require('./requisitesRoutes.js');
router.use('/requisites', requisitesRoutes); // done

const productsRoutes = require('./productRoutes.js');
router.use('/products', productsRoutes); // done

const ownerInfoRoutes = require('./ownerInfoRoutes.js');
router.use('/owner-info', ownerInfoRoutes); // done

const basketRoutes = require('./basketRoutes.js');
router.use('/basket', basketRoutes); // done

const orderHistoryRoutes = require('./orderHistoryRoutes.js');
router.use('/order-history', orderHistoryRoutes); // done

const paymentInfoRoutes = require('./paymentInfoRoutes.js');
router.use('/payment-info', paymentInfoRoutes); // update

module.exports = router;