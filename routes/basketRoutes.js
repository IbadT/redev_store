const router = require('express').Router();
const BasketControllers = require('../controllers/BasketControllers.js');
const validation = require('../helpers/validation.js');
const { param } = require('express-validator')


/**
 * @swagger
 * /api/basket/get:
 *   get:
 *     summary: Get user's basket
 *     tags: [Basket]
 *     security: 
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', validation, BasketControllers.getBasket);


/**
 * @swagger
 * /api/basket/add/{product_id}:
 *   post:
 *     summary: Add product in user's basket
 *     tags: [Basket]
 *     security: 
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: product_id
 *         type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add/:product_id', validation, param('product_id').toInt(), BasketControllers.addBasket);


/**
 * @swagger
 * /api/basket/delete:
 *   delete:
 *     summary: Delete user's basket
 *     tags: [Basket]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.delete('/delete', validation, BasketControllers.deleteBasket);


module.exports = router;