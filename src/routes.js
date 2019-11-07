const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const agendarController = require('./controllers/agendarController');

// Routes Medico
router.get('/med', mainController.index);
router.post('/med', mainController.create);
router.put('/med/:id', mainController.put);
router.delete('/med/:id', mainController.delete);

// Routes Agendar
router.get('/agendar', agendarController.index);
router.post('/agendar', agendarController.create);
router.delete('/agendar/:id', agendarController.delete);
router.put('/agendar/:idAgendamento', agendarController.put);

module.exports = router;