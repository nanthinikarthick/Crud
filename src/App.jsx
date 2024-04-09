import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Create from "../src/Crud/Create";

import Read from "../src/Crud/Read";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <p className=" p-5 fs-1 fw-bold text-center text-warning">REACT CRUD OPERATION</p>
          <nav>
            <ul
              className=" d-flex justify-content-between fs-4"
              style={{ listStyleType: "none" }}
            >
              <li>
                <Link to="/Create"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight:"bold"
                  }}
                >
                  Create Data
                </Link>
              </li>
              <li>
                <Link to="/Delete" 
                  style={{
                    textDecoration: "none",
                    color: "black", 
                    fontWeight:"bold"
                    
                  }}
                >
                  Update /Delete Data
                </Link>
              </li> 
              <li>
                <Link to="/Read"
                  style={{
                    textDecoration: "none",
                    color: "black",marginRight:"20px", fontWeight:"bold"
                  }}
                >
                  Get Data
                </Link>
              </li>
              

            </ul>
          </nav>

          <Routes>
            <Route path="/Create" element={<Create />} />
          
            <Route path="/Read" element={<Read />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );

}
export default App;
