const router = require('express').Router();
const ProductControllers = require('../controllers/ProductControllers.js');
const validation = require('../helpers/validation.js');
const { param } = require('express-validator')



// поиск по цене






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


// /**
//  * @swagger
//  * /api/products/get-product/{id}:
//  *   get:
//  *     summary: Get some product by id
//  *     tags: [Products]
//  *     security: 
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         type: integer
//  *     responses:
//  *       '200':
//  *         description: Seccess
//  */

// router.get('/get-product/:id', param('id').toInt(), ProductControllers.getProductById);


/**
 * @swagger
 * /api/products/search-category/{category_id}:
 *   get:
 *     summary: Search product by category
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: category_id
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/search-category/:category_id', ProductControllers.searchByCategory);

/**
 * @swagger
 * /api/products/search-by-price:
 *   get:
 *     summary: Search and sort products by price
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: min
 *         required: true
 *         type: number
 *       - in: query
 *         name: max
 *         required: true
 *         type: number
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/search-by-price', ProductControllers.searchByPrice); 


/**
 * @swagger
 * /api/products/sort-by-price:
 *   get:
 *     summary: Sort by products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: max
 *         required: true
 *         type: boolean
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/sort-by-price', ProductControllers.sortByPrice);


// /**
//  * @swagger
//  * /api/products/search-by-count/{maxCount}:
//  *   get:
//  *     summary: Search products by count
//  *     tags: [Products]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: maxCount
//  *         required: false
//  *         type: boolean
//  *       - in: query
//  *         name: category_id
//  *         type: integer
//  *         required: false
//  *     responses:
//  *       '200':
//  *         description: Seccess
//  */

// router.get('/search-by-count/:maxCount', ProductControllers.searchByCount); 


/**
 * @swagger
 * /api/products/sort-by-created:
 *   get:
 *     summary: Search products and sort by created
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: createdMax
 *         required: false
 *         type: boolean
 *       - in: query
 *         name: category_id
 *         type: integer
 *         required: false
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/sort-by-created', ProductControllers.searchByCreated);



/**
 * @swagger
 * /api/products/get-not-nullable-count:
 *   get:
 *     summary: Get products which have param COUNT is great then 0
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.get('/get-not-nullable-count', ProductControllers.getNotNullableCount)



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
 *               category_id:
 *                 type: integer
 *               img:
 *                 type: string
 *               color:
 *                 type: string
 *               count:
 *                 type: integer
 *               price:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.post('/add', validation, ProductControllers.addProduct);


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
 *                 type: integer
 *               img:
 *                 type: string
 *               count:
 *                 type: integer
 *               price:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.patch('/update-some-product/:id', ProductControllers.updateSomeProduct);


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

router.delete('/delete/:id', param('id').toInt(), ProductControllers.deleteProductById);

module.exports = router;