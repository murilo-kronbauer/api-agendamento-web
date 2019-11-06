const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController')

router.get('/med', mainController.index);
router.post('/med', mainController.create);
router.put('/task/:id', mainController.put);

module.exports = router;