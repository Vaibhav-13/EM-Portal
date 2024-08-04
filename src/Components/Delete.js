import React from 'react';
import axios from 'axios';
import "../Stylesheets/Component.css";

function Delete({ empid, onDelete }) { //to get the empid and onDelete 
  const handleDelete = async () => { 
    try {
      await axios.delete(`http://localhost:5000/api/data/${empid}`);//connect to db and get empid
      onDelete(empid); //call onDelete method
      alert('Data deleted successfully');
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('Failed to delete data');
    }
  };

  return (
    <button id='button' onClick={handleDelete}>Delete</button> //onClick go to handleDelete function
  );
}

export default Delete;
