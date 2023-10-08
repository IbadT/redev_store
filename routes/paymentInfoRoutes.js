const router = require('express').Router();
const PaymentInfoControllers = require('../controllers/PaymentInfoControllers.js');



/**
 * @swagger
 * /api/payment-info/get:
 *   get:
 *     summary: Get user's info for payment
 *     tags: [Payment-Info]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', PaymentInfoControllers.getPaymentInfo);


/**
 * @swagger
 * /api/payment-info/add:
 *   post:
 *     summary: Add payment info for user
 *     tags: [Payment-Info]
 *     security: 
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:       
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount_of_payment:
 *                 type: float              
 *               order_date:
 *                 type: string
 *               purpose_of_payment:
 *                 type: string
 *               payment_method:
 *                 type: string
 *               delivery_method:
 *                 type: string
 *               order_status:
 *                 type: string
 *               product_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add', PaymentInfoControllers.addPaymentInfo)

module.exports = router;