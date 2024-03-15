const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Food Delivery API',
        version: '1.0.0',
        description: 'API documentation for the Food Delivery App',
    },
    basePath: '/',
};

const options = {
    swaggerDefinition,
    apis: ['./routes.js'],
};

module.exports = swaggerJsdoc(options);
