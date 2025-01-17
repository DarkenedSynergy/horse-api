const express = require('express');
const router = express.Router();
const horseController = require('../controllers/horseController');
const Horse = require('../models/Horse');

// Routes
router.get('/search', horseController.searchHorses); 
router.get('/', horseController.getAllHorses);
router.post('/', horseController.createHorse);
router.post('/bulk', horseController.bulkInsertHorses);
router.patch('/:id/availability', horseController.updateAvailability);
router.get('/:id', horseController.getHorseById);
router.put('/:id', horseController.updateHorse);
router.delete('/:id', horseController.deleteHorse);


module.exports = router;
