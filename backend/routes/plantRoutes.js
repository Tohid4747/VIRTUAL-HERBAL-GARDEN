const express = require('express');
const router = express.Router();
const { getPlants, getPlantBySlug, createPlant, updatePlant, deletePlant } = require('../controllers/plantController');
const { protect, adminOnly } = require('../middleware/auth');

router.route('/')
  .get(getPlants)
  .post(protect, adminOnly, createPlant);

router.route('/:id')
  .put(protect, adminOnly, updatePlant)
  .delete(protect, adminOnly, deletePlant);

// Separate route for slug to avoid conflicting with /:id
router.get('/slug/:slug', getPlantBySlug);

module.exports = router;