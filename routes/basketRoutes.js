const router = require('express').Router();
const BasketControllers = require('../controllers/BasketControllers.js');


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

router.get('/get', BasketControllers.getBasket);


/**
 * @swagger
 * /api/basket/add:
 *   post:
 *     summary: Add product in user's basket
 *     tags: [Basket]
 *     security: 
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add', BasketControllers.addBasket);


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

router.delete('/delete', BasketControllers.deleteBasket);


module.exports = router;