import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Stylesheets/Table.css";
/* Hard coded Data for table
  const data = [    
    {
        id: 87873,
        name: "Mahi",
        gender: "FeMale",
        email: "yuas@gmail.com",
        phone: 1234567890,
        city: "Mumbai",
        dob: "19/11/1998",
        clevel: 10,
    },
    {
        id: 12345,
        name: "Ram",
        gender: "Male",
        email: "azxd@gmail.com",
        phone: 7855567890,
        city: "Pune",
        dob: "13/11/2001",
        clevel: 11,
    },{
        id: 585,
        name: "Lisa",
        gender: "FeMale",
        email: "zkw@gmail.com",
        phone: 1555457890,
        city: "Mumbai",
        dob: "19/01/1996",
        clevel: 9,
    },
    {
        id: 5168,
        name: "John",
        gender: "Male",
        email: "ased@gmail.com",
        phone: 8934567890,
        city: "Pune",
        dob: "13/08/2010",
        clevel: 13,
    },
  ];
  */
  function Table() {
    
      const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
      <div className="App">
       
        <table className="container">
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
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.gender}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.city}</td>
                  <td>{value.dob}</td>
                  <td>{value.careerlevel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  
  
  export default Table;
