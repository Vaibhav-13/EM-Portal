import { useState } from 'react';

function Form() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [careerlevel, setCareerLevel] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch('http://127.0.0.1:5000/api/data', {
        method: "POST",
        body: JSON.stringify({ id, name, gender, email, phone, city, dob, careerlevel }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      result = await result.json();  // Expecting JSON here
      console.warn(result);
      if (result.message === 'Data saved successfully') {
        alert("Data saved successfully");
        window.close(); // Close the popup window
      } else {
        alert(result.message); // Alert the message received from the server
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save data');
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="number"
        placeholder="Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date Of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="number"
        placeholder="Career Level"
        value={careerlevel}
        onChange={(e) => setCareerLevel(e.target.value)}
      /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
