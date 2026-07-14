const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  scientificName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Ayurvedic', 'Medicinal', 'Aromatic', 'Culinary', 'Other']
  },
  description: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  uses: {
    type: [String],
    required: true
  },
  benefits: {
    type: [String],
    required: true
  },
  // Phase 2 Fields (Images & Audio)
  imageUrl: {
    type: String,
    default: '' 
  },
  audioUrl: {
    type: String,
    default: ''
  },
  // Phase 3 Fields (3D Models)
  model3dUrl: {
    type: String,
    default: ''
  },
  modelCredit: {
    type: String,
    default: ''
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Plant', plantSchema);