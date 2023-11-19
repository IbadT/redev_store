const router = require('express').Router();
const OrderHistoryControllers = require('../controllers/OrderHistoryControllers.js')
const validation = require('../helpers/validation.js');
const { param } = require('express-validator')


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







// хранение информации о статусе доставки



/**
 * @swagger
 * /api/order-history/get-order-status/{payment_info_id}:
 *   get:
 *     summary: Get order status
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

router.get('/get-order-status/:payment_info_id', validation, param('payment_info_id').toInt(), OrderHistoryControllers.getOrderStatus)



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
 * /api/order-history/update-status:
 *   patch:
 *     summary: Update order status
 *     tags: [Order-History]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: payment_info_id
 *         required: true
 *         type: integer
 *     responses: 
 *       '200':
 *         description: Seccess
 */

// реализациы функционала для обновления статуса доставки заказа
router.patch('/update-status', validation, OrderHistoryControllers.updateStatus)



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