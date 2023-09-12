const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('Hello');
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;