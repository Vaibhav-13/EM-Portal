const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Define the schema with correct types
const DataSchema = new mongoose.Schema({
  empid: { type: Number, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  dob: { type: String, required: true },
  careerlevel: { type: Number, required: true }
});



const Data = mongoose.model('Employee_Info', DataSchema);

//DB connection
mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

//to post or add data in DB
app.post('/api/data', async (req, res) => {
  const { empid, name, gender, email, phone, city, dob, careerlevel } = req.body;

  // Validate the incoming data
  if (!empid || !name || !email || !phone || !dob || !careerlevel) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  const newData = new Data({
    empid,
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

//to get or fetch data from DB
app.get('/api/data', async (req, res) => {
  try {
    const employees = await Data.find();
    res.json(employees);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

//to update data in DB
app.put('/api/data/:empid', async (req, res) => {
  const { empid } = req.params;
  const updatedData = req.body;

  try {
    const updatedEmployee = await Data.findOneAndUpdate({ empid: empid }, updatedData, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee updated successfully', data: updatedEmployee });
  } catch (err) {
    res.status(500).json('Error: ' + err);
  }
});

//to delete data from DB
app.delete('/api/data/:empid', async (req, res) => {
  try {
    const deletedItem = await Data.findOneAndDelete({ empid: req.params.empid });
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json('Error: ' + err);
  }
});

//to check server is up and running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
