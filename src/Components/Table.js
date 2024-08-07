import React, { useState, useEffect } from 'react';
import axios from 'axios'; //used to send asynchronous HTTP requests to REST endpoints
import Delete from './Delete';
import Update from './Update';
import "../Stylesheets/Table.css";
import { FaSearch } from "react-icons/fa";

function Table() {
  const [data, setData] = useState([]); //useState is used for storing variables
  const [selectedEmpId, setSelectedEmpId] = useState([]);
  
  useEffect(() => {
    fetchData(); // useEffect is used here for re-rendering the data
  }, []);

  const fetchData = async () => { //fetch data
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = (empid) => { //to delete data for empid
    setData(data.filter(item => item.empid !== empid)); //data will removed
  };


  const handleSearch = (empid) => { //to update data
     //fetch data
  };
  const handleUpdate = (empid) => { //to update data
    fetchData(); //fetch data
    setSelectedEmpId(empid); //to update data for empid
  };



  return (
    <div className="App">
      <div id="search">
        <input placeholder='Enter Employee ID' ></input> 
        <button id='icon' onClick={handleSearch}>
             <FaSearch/>
        </button> 
      </div>
      <table className="container"> {/*Print database data in table format*/}
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>DOB</th>
            <th>Career Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value.empid}>
              <td>{value.empid}</td>
              <td>{value.name}</td>
              <td>{value.gender}</td>
              <td>{value.email}</td>
              <td>{value.phone}</td>
              <td>{value.city}</td>
              <td>{value.dob}</td>
              <td>{value.careerlevel}</td>
              <td>
                <Delete empid={value.empid} onDelete={handleDelete} /> {/*to delete data for empid */}
               {selectedEmpId === value.empid ? (
                  <Update empid={value.empid} onUpdate={handleUpdate} /> //to update data for empid
                ) : (
                  <button id="buttonAddUpdate" onClick={() => setSelectedEmpId(value.empid)}>Update</button> 
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
