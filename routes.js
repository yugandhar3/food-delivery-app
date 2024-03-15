// routes.js
const express = require('express');
const router = express.Router();
const pricingController = require('./src/controllers/pricingController');

/**
 * @swagger
 * /api/calculate-price:
 *   post:
 *     summary: Calculate price for food delivery
 *     description: Calculate the total cost of food delivery based on various factors.
 *     parameters:
 *       - name: deliveryDetails
 *         in: body
 *         description: Details of the delivery
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             zone:
 *               type: string
 *               description: Zone for the delivery
 *             organization_id:
 *               type: number
 *               description: ID of the organization
 *             total_distance:
 *               type: number
 *               description: Total distance for the delivery
 *             item_type:
 *               type: string
 *               description: Type of food item (perishable/non-perishable)
 *     responses:
 *       200:
 *         description: Successful response with total price
 */

router.post('/calculate-price', pricingController.calculatePrice);

module.exports = router;
