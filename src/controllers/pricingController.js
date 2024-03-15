const { calculatePrice } = require('../services/pricingService');

exports.calculatePrice = async (req, res) => {
    const { zone, organization_id, total_distance, item_type } = req.body;

    // Validate request payload
    if (!zone || !organization_id || !total_distance || !item_type) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const totalPrice = await calculatePrice(zone, parseInt(organization_id), total_distance, item_type);
        return res.json({ total_price: totalPrice });
    } catch (error) {
        console.error('Error calculating price:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};