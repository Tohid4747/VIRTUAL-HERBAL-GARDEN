const Favorite = require('../models/Favorite');

// @desc    Get user's favorite plants
// @route   GET /api/favorites
// @access  Private
exports.getFavorites = async (req, res) => {
  try {
    // Fetch favorites for this user and populate the actual plant data
    const favorites = await Favorite.find({ user: req.user.id }).populate('plant');
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Add plant to favorites
// @route   POST /api/favorites/:plantId
// @access  Private
exports.addFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.create({
      user: req.user.id,
      plant: req.params.plantId
    });
    res.status(201).json(favorite);
  } catch (error) {
    // Error code 11000 means it triggered our unique compound index (already favorited)
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Plant already in favorites' });
    }
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Remove plant from favorites
// @route   DELETE /api/favorites/:plantId
// @access  Private
exports.removeFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findOneAndDelete({
      user: req.user.id,
      plant: req.params.plantId
    });
    
    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }
    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};