const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.calculatePrice = async (zone, organizationId, totalDistance, itemType) => {
    try {
        // Fetch pricing data from the database based on zone and organizationId
        const pricingData = await prisma.pricing.findFirst({
            where: { zone, organizationId },
        });

        if (!pricingData) {
            throw new Error('Pricing data not found');
        }

        // Extract base distance, km price, and fixed price from pricingData
        const { baseDistanceInKm, kmPrice, fixPrice } = pricingData;

        // Calculate total price based on distance and item type
        let totalPrice = fixPrice * 100; // Convert fix price to cents

        if (totalDistance > baseDistanceInKm) {
            totalPrice += (totalDistance - baseDistanceInKm) * kmPrice * 100; // Convert km price to cents
        }

        if (itemType === 'perishable') {
            totalPrice *= 1.5; // Perishable item price adjustment
        }
        return totalPrice;
    } catch (error) {
        throw new Error(`Error calculating price: ${error.message}`);
    }
};