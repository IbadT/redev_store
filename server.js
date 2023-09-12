require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const routes = require('./routes/index.js');
app.use('/api', routes);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is started...');
});

module.exports = app;