import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from "./Components/Add"; // Import the add component
import Table from "./Components/Table"; // Import the new Table component
import Form from "./Components/Form"; // Import the new Form component for adding new employee data
import "./Stylesheets/Main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ 
          <>
            <h1 className="heading">EM-Portal</h1>  {/* Heading */}
            <div id="nav">
            <h1 style={{ textAlign: 'center' }}>Employee Data Sheet</h1>
              <Table />  {/* To show table */}
              <div id="add">
                <Add /> {/* To add data in table */}
              </div>
            </div>
            <h2 className="footer">...................</h2> {/* Footer */}
          </>
        } />
        <Route path="/popup-form" element={<Form />} /> {/* Popup form to add employee data */}
      </Routes>
    </Router>  
  );
}

export default App;
