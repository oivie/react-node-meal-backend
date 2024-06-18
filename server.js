// to install: 
// npm i cors 
// npm i dotenv
// npm i mongoose
// npm i nodemon


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./MealRoutes');
const app = express();

app.use(cors());
app.use(express.json());


// Use process.env.PORT || 4000 for your port
const PORT = process.env.PORT || 4000;



// Ensure that the environment variable is read as a string
console.log("Connection string:", process.env.MONGODB_Link);

mongoose
  .connect(process.env.MONGODB_Link) // Use the environment variable for your MongoDB connection string
  .then(() => console.log('We are connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

