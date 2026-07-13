const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 
const auth = require('../middleware/auth'); 

// POST: Save a plant to favorites
router.post('/', auth, async (req, res) => {
  try {
    const { plantId } = req.body;
    
    const existingFav = await Favorite.findOne({ user: req.user.id, plant: plantId });
    if (existingFav) {
      return res.status(400).json({ message: 'Plant is already in your favorites!' });
    }

    const newFavorite = new Favorite({
      user: req.user.id,
      plant: plantId
    });

    const savedFavorite = await newFavorite.save();
    res.status(201).json(savedFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save favorite.' });
  }
});

// GET: Fetch all favorites for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user.id }).populate('plant');
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch favorites.' });
  }
});

// DELETE: Remove a plant from favorites
router.delete('/:id', auth, async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found.' });
    }
    
    if (favorite.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized.' });
    }
    
    await favorite.deleteOne();
    res.json({ message: 'Removed from favorites.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete favorite.' });
  }
});

module.exports = router;