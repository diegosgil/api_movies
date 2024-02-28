const { Router } = require('express');
const router = Router();

router.get('/movies', (req, res) => {
    res.send("Pelicula recibida")
});

module.exports = router;