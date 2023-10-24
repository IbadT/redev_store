const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API for redev-store',
            server: ['http://localhost:3000'],
            version: '1.0.0'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    name: 'Authorization',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                },
            },
        },
    },
    apis: ['./routes/*.js']
};

const swaggerDoc = swaggerJsDoc(options);

module.exports = swaggerDoc;