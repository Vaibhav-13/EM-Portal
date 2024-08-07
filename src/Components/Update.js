import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Stylesheets/Component.css";

function Update({ empid, onUpdate }) {
  const [employee, setEmployee] = useState({
    empid: empid, //employee id
    name: '', //employee name
    gender: '',  //employee gender
    email: '', //employee email
    phone: '', //employee phone
    city: '', //employee city
    dob: '', //employee dob
    careerlevel: '' //employee career level
  });

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/data/${empid}`); //to fetch data by empid
      setEmployee(response.data); 
    } catch (error) { //to handle the error
      console.error('Error fetching employee data:', error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/data/${empid}`, 
        employee,
    );
      onUpdate(empid);
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <input
        type="number"
        name="empid"
        placeholder={empid}
        value={employee.empid}
        onChange={handleChange}
        disabled
      />
      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={employee.gender}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={employee.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={employee.city}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        placeholder="Date Of Birth"
        value={employee.dob}
        onChange={handleChange}
      />
      <input
        type="number"
        name="careerlevel"
        placeholder="Career Level"
        value={employee.careerlevel}
        onChange={handleChange}
      />
      <button id="buttonAddUpdate" type="submit">Update</button>
    </form>
  );
}

export default Update;
