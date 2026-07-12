const Plant = require('../models/Plant');

// @desc    Get all plants (with optional search and category filters)
// @route   GET /api/plants
// @access  Public
exports.getPlants = async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) {
      query.$text = { $search: search };
    }
    if (category) {
      query.category = category;
    }

    const plants = await Plant.find(query);
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get single plant by slug
// @route   GET /api/plants/:slug
// @access  Public
exports.getPlantBySlug = async (req, res) => {
  try {
    const plant = await Plant.findOne({ slug: req.params.slug });
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.json(plant);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create a plant
// @route   POST /api/plants
// @access  Private/Admin
exports.createPlant = async (req, res) => {
  try {
    // Attach the admin user's ID as the creator
    const plantData = { ...req.body, createdBy: req.user.id };
    const plant = await Plant.create(plantData);
    res.status(201).json(plant);
  } catch (error) {
    res.status(400).json({ message: 'Invalid plant data', error: error.message });
  }
};

// @desc    Update a plant
// @route   PUT /api/plants/:id
// @access  Private/Admin
exports.updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Returns the updated document
      runValidators: true
    });
    if (!plant) return res.status(404).json({ message: 'Plant not found' });
    res.json(plant);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
};

// @desc    Delete a plant
// @route   DELETE /api/plants/:id
// @access  Private/Admin
exports.deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id);
    if (!plant) return res.status(404).json({ message: 'Plant not found' });
    res.json({ message: 'Plant removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};