const router = require('express').Router();
const PaymentInfoControllers = require('../controllers/PaymentInfoControllers.js');
const validation = require('../helpers/validation.js');



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

router.get('/get', validation, PaymentInfoControllers.getPaymentInfo);


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
 *               order_date:
 *                 type: string
 *               purpose_of_payment:
 *                 type: string
 *               payment_method_id:
 *                 type: integer
 *                 default: 2
 *               delivery_method_id:
 *                 type: integer
 *                 default: 1
 *               order_status_id:
 *                 type: integer
 *                 default: 1
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add', validation, PaymentInfoControllers.addPaymentInfo)

module.exports = router;