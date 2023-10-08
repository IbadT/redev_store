const router = require('express').Router();
const RequisitesControllers = require('../controllers/RequisitesControllers.js');



/**
 * @swagger
 * /api/requisites/card:
 *   get:
 *     summary: Get card's data
 *     tags: [Card]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/card', RequisitesControllers.getCards); 


/**
 * @swagger
 * /api/requisites/add-card:
 *   post:
 *     summary: create card's data
 *     tags: [Card]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               card_number:
 *                 type: integer
 *               card_date:
 *                 type: string
 *               cvv:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add-card', RequisitesControllers.addCard);


/**
 * @swagger
 * /api/requisites/delete-card:
 *   delete:
 *     summary: Delete card's data
 *     tags: [Card]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.delete('/delete-card', RequisitesControllers.deleteCard); 


module.exports = router;