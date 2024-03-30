const express = require('express');
const router = express.Router();
const { calculatePriceHandler } = require('../controllers/pricingController');

/**
 * @swagger
 * /calculate-price:
 *   post:
 *     summary: Calculate delivery price
 *     tags: [Pricing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 example: central
 *               organization_id:
 *                 type: string
 *                 example: 005
 *               total_distance:
 *                 type: number
 *                 example: 12
 *               item_type:
 *                 type: string
 *                 example: perishable
 *     responses:
 *       200:
 *         description: The calculated price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   example: 20.5
 */
router.post('/calculate-price', calculatePriceHandler);

module.exports = router;
