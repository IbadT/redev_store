const router = require('express').Router();
const validation = require('../helpers/validation.js');
const UserInfoControllers = require('../controllers/UserInfoControllers.js');




/**
 * @swagger
 * /api/user-info/:
 *   get:
 *     summary: Get userInfo
 *     tags: [User-Info]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/', validation, UserInfoControllers.getInfo);


/**
 * @swagger
 * /api/user-info/create-user-info:
 *   post:
 *     summary: Create user info
 *     tags: [User-Info]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               adress:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

router.post('/create-user-info', validation, UserInfoControllers.createUserInfo);


/**
 * @swagger
 * /api/user-info/update-info:
 *   put:
 *     summary: Update user info
 *     tags: [User-Info]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               adress:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

router.put('/update-info', validation, UserInfoControllers.updateInfo);


/**
 * @swagger
 * /api/user-info/update-some-info:
 *   patch:
 *     summary: Update some user info
 *     tags: [User-Info]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               adress:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

router.patch('/update-some-info', validation, UserInfoControllers.updateSomeInfo);


module.exports = router;