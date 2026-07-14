const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Plant = require('../models/Plant');
const Favorite = require('../models/Favorite');
const plantsData = require('./plantsData');

// Load env vars (pointing one directory up to where your .env lives)
dotenv.config({ path: __dirname + '/../.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();

    // 1. Clear existing data to prevent duplicates
    await Plant.deleteMany();
    await User.deleteMany();
    await Favorite.deleteMany();

    // 2. Create a test admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@herbalgarden.com',
      password: hashedPassword,
      role: 'admin'
    });

    // 3. Attach the admin user as the creator of each plant
   // 3. Attach the admin user AND auto-generate a unique slug for each plant
    const samplePlants = plantsData.map(plant => {
      // Converts "Aloe Vera" into "aloe-vera"
      const generatedSlug = plant.name.toLowerCase().replace(/ /g, '-'); 
      
      return { 
        ...plant, 
        slug: generatedSlug,
        createdBy: adminUser._id 
      };
    });

    // 4. Insert plants into the database
    await Plant.insertMany(samplePlants);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Execute the script
importData();