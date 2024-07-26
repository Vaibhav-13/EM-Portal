const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Define the schema with correct types
const DataSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  gender: { type: String, default: '' }, // Changed to String for gender
  email: { type: String, required: true },
  phone: { type: String, required: true }, // Changed to String to handle phone numbers with leading zeros
  city: { type: String, default: '' }, // Changed to String for city
  dob: { type: String, required: true },
  careerlevel: { type: Number, required: true },
});

const Data = mongoose.model('Employee_Info', DataSchema);

mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.post('/api/data', async (req, res) => {
  const { id, name, gender, email, phone, city, dob, careerlevel } = req.body;

  // Validate the incoming data
  if (!id || !name || !email || !phone || !dob || !careerlevel) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  const newData = new Data({
    id,
    name,
    gender,
    email,
    phone,
    city,
    dob,
    careerlevel
  });

  try {
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
