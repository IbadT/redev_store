const router = require('express').Router();
const OrderHistoryControllers = require('../controllers/OrderHistoryControllers.js')
const validation = require('../helpers/validation.js');

/**
 * @swagger
 * /api/order-history/get:
 *   get:
 *     summary: Get user's order history
 *     tags: [Order-History]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', validation, OrderHistoryControllers.getOrderHistory);


/**
 * @swagger
 * /api/order-history/add/{payment_info_id}:
 *   post:
 *     summary: Add order history
 *     tags: [Order-History]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: payment_info_id
 *         type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add/:payment_info_id', validation, OrderHistoryControllers.addOrderHistory);


/**
 * @swagger
 * /api/order-history/delete:
 *   delete:
 *     summary: Delete user's order history
 *     tags: [Order-History]
 *     security:    
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.delete('/delete', validation, OrderHistoryControllers.deleteOrderHistory);

module.exports = router;