const express = require('express');
const router = express.Router();
const { getPlants, getPlantBySlug, createPlant, updatePlant, deletePlant } = require('../controllers/plantController');
const auth = require('../middleware/auth'); // Updated import

router.route('/')
  .get(getPlants)
  .post(auth, auth.adminOnly, createPlant); // Updated middleware usage

router.route('/:id')
  .put(auth, auth.adminOnly, updatePlant)   // Updated middleware usage
  .delete(auth, auth.adminOnly, deletePlant); // Updated middleware usage

// Separate route for slug to avoid conflicting with /:id
router.get('/slug/:slug', getPlantBySlug);

module.exports = router;