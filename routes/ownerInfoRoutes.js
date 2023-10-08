const router = require('express').Router();
const OwnerInfoControllers = require('../controllers/OwnerInfoControllers.js')




/**
 * @swagger
 * /api/owner-info/get:
 *   get: 
 *     summary: Get owner info by authorization's user id
 *     tags: [Owner-Info]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', OwnerInfoControllers.getOwnerInfo); 


/**
 * @swagger
 * /api/owner-info/add:
 *   post:
 *     summary: Add owner info
 *     tags: [Owner-Info]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organization:
 *                 type: string              
 *               accaunt_number:
 *                 type: integer
 *               inn:
 *                 type: integer
 *               bik:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add', OwnerInfoControllers.addOwnerInfo);


/**
 * @swagger
 * /api/owner-info/edit:
 *   put:
 *     summary: Edit owner info by authorization's user id
 *     tags: [Owner-Info]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organization:
 *                 type: string              
 *               accaunt_number:
 *                 type: integer
 *               inn:
 *                 type: integer
 *               bik:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.put('/edit', OwnerInfoControllers.editOwnerInfo);


module.exports = router;