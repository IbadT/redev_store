require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());


const Sentry = require('@sentry/node');

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());

Sentry.init({
    dsn: process.env.DSN
});




const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
                    sheme: 'bearer',
                    bearerFormat: 'JWT'
                },
            },
        },
    },
    apis: ['./routes/*.js']
};

const swaggerDoc = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


const routes = require('./routes/index.js');
app.use('/api', routes);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started...');
});

module.exports = app;