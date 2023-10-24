function isLoggedIn(req, res, next) {
    if(req.isAuthentication()) {
        return next();
    }
    res.redirect('/login');
};

module.exports = isLoggedIn;