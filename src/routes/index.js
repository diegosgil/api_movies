const {Router} = require('express');
const router = Router();

//routes
router.get('/', (req, res) => {
    res.send("Mensaje recibido");
});

module.exports = router;