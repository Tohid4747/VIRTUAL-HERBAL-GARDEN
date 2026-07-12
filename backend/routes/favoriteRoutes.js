const express = require('express');
const router = express.Router();
const { getFavorites, addFavorite, removeFavorite } = require('../controllers/favoriteController');
const { protect } = require('../middleware/auth');

// All favorite routes require the user to be logged in
router.use(protect); 

router.route('/')
  .get(getFavorites);

router.route('/:plantId')
  .post(addFavorite)
  .delete(removeFavorite);

module.exports = router;