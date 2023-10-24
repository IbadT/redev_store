require('dotenv').config();
const jwt = require('jsonwebtoken');

const validation = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.split(' ')[1];
        if(token === undefined) res.sendStatus(401);
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, userId) => {
            if(err) throw new Error(err);
            req.userId = userId;
            next();
        }); 
    } catch (error) {
        res.sendStatus(403);
    }
};

module.exports = validation;