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





const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./generate-docs.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


const routes = require('./routes/index.js');
app.use('/api', routes);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started...');
});

module.exports = app;