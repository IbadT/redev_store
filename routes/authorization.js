require('dotenv').config();
const router = require('express').Router();
const UserControllers = require('../controllers/UserController.js');


/**
 * @swagger
 * /api/authorization/login:
 *   post:
 *     summary: Login user
 *     tags: [Authorization]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:    
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '401':
 *         description: Bad Request
 */

router.post('/login', UserControllers.login);


/**
 * @swagger
 * /api/authorization/register:
 *   post:
 *     summary: Register user
 *     tags: [Authorization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login: 
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

router.post('/register', UserControllers.register); 


/**
 * @swagger
 * /api/Authorization/delete-user:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

router.delete('/delete-user', UserControllers.deleteUser);


module.exports = router;