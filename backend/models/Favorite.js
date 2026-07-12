const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  plant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Plant',
    required: true
  }
}, {
  timestamps: true
});

// Prevent a user from favoriting the same plant multiple times
favoriteSchema.index({ user: 1, plant: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);