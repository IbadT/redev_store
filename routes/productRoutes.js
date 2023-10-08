const router = require('express').Router();
const ProductControllers = require('../controllers/ProductControllers.js');


/**
 * @swagger
 * /api/products/get:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get', ProductControllers.getAllProduct);


/**
 * @swagger
 * /apiproducts/get-product/{id}:
 *   get:
 *     summary: Get some product by id
 *     tags: [Products]
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
 */

router.get('/get-product', ProductControllers.getProductById);


/**
 * @swagger
 * /api/products/add:
 *   post:  
 *     summary: Add new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               img:
 *                 type: string
 *               count:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add', ProductControllers.addProduct);


/**
 * @swagger
 * /api/products/update-some-product/{id}:
 *   patch:
 *     summary: Update product by id
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               img:
 *                 type: string
 *               count:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.patch('/update-some-product', ProductControllers.updateSomeProduct);


/**
 * @swagger
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Delete product by id
 *     tags: [Products]
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
 */

router.delete('/delete', ProductControllers.deleteProductById);

module.exports = router;