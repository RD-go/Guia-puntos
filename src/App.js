import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LibrosPage from "./LibrosPage"; 
import VideojuegosPage from "./VideojuegosPage"; 

function App() {
  const [name, setName] = useState("");

  return (
    <Router>
      <div style={{ display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    height: "100vh", 
                    fontFamily: "Arial, sans-serif" 
                    }}>
        <h1>Menu</h1>

        <div style={{ marginBottom: "20px", 
                      width: "300px" 
                      }}>
          <input type="text" placeholder="name *" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: "10px", width: "100%", fontSize: "16px", boxSizing: "border-box" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Link to="/libros" state={{ name }} style={{ textDecoration: 'none' }}> 
            <div style={{ width: "200px", padding: "15px", border: "1px solid lightblue", textAlign: "center", backgroundColor: "white", color: "lightblue", textTransform: "uppercase", cursor: "pointer", marginBottom: "0" }}>
              <h2 style={{ margin: 0 }}>Libros</h2>
            </div>
          </Link>

          <Link to="/videojuegos" onClick={() => sessionStorage.setItem("name", name)} style={{ textDecoration: 'none' }}> 
            <div style={{ width: "200px", padding: "15px", border: "1px solid lightblue", textAlign: "center", backgroundColor: "white", color: "lightblue", textTransform: "uppercase", cursor: "pointer", marginBottom: "0" }}>
              <h2 style={{ margin: 0 }}>Videojuegos</h2>
            </div>
          </Link>
        </div>

        <Routes>
          <Route path="/libros" element={<LibrosPage />} /> 
          <Route path="/videojuegos" element={<VideojuegosPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
