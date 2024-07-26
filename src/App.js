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
            <h1 className="heading">EM-Portal</h1>
            <div id="nav">
					  <Table />
            <div id="options">
              <Add />
              <Update />
              <Delete />
            </div>
            </div>
            <h2 className="footer">...................</h2>
          </>
        } />
        <Route path="/popup-form" element={<Form />} />
      </Routes>
    </Router>  
  );
}

export default App;
