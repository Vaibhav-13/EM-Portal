import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from "./Components/Add";
import Update from "./Components/Update";
import Delete from "./Components/Delete";
import Table from "./Components/Table";
import Form from "./Components/Form"; // Import the new PopupForm component
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
                {/* Components */}
              <Table /> 
              <div id="options">
                <Add />
                <Update />
                <Delete />
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
