const mongoose = require('mongoose');

const db_connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Database Connection Failed:", error.message); 
  }
};

module.exports = db_connection;
