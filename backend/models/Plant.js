const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a plant name'],
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  scientificName: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['Medicinal', 'Aromatic', 'Culinary', 'Ayurvedic', 'Other'],
    default: 'Medicinal'
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  uses: {
    type: [String],
    default: []
  },
  benefits: {
    type: [String],
    default: []
  },
  imageUrl: {
    type: String,
    default: 'no-photo.jpg'
  },
  audioUrl: {
    type: String
  },
  region: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Create text index for the frontend search bar
plantSchema.index({ name: 'text', scientificName: 'text', description: 'text' });

module.exports = mongoose.model('Plant', plantSchema);