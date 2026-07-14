import axios from 'axios';

// Adjust this base URL if your file uses a different setup
const API_URL = 'http://localhost:5000/api/plants'; 

export const getAllPlants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching plants:", error);
    throw error;
  }
};

// ... keep your other api calls (like getPlantBySlug) below