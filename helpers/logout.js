const logout = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if(authorization) {
            delete req.userId
            delete req.headers.authorization
            next();
        } else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.sendStatus(403);
    }
}

module.exports = logout;