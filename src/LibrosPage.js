import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const librosData = [
  { id: 1, nom: "El problema Final", anho: 2023, autor: "Arturo Perez-Reverte" },
  { id: 2, nom: "Los genios", anho: 2023, autor: "Jaime Bayly" },
  { id: 3, nom: "Ceniza en la boca", anho: 2022, autor: "Brenda Navarro" },
];

function LibrosPage() {
  const location = useLocation();
  const nombre = location.state?.name || "";  
  const [filtroAutor, setFiltroAutor] = useState("");

  const librosFiltrados = librosData.filter((libro) =>
    libro.autor.toLowerCase().includes(filtroAutor.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", 
                  fontFamily: "Arial, sans-serif" 
                  }}>
      <h1>Libros</h1>
      {nombre && <p>Nombre: {nombre}</p>}

      <input
        type="text"
        placeholder="Filtrar por autor"
        value={filtroAutor}
        onChange={(e) => setFiltroAutor(e.target.value)}
        style={{  padding: "10px", 
                  marginBottom: "20px", 
                  fontSize: "16px", 
                  width: "300px" 
                }}
      />

      {librosFiltrados.length > 0 ? (
        <table style={{ width: "100%", 
                        borderCollapse: "collapse" 
                        }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid lightblue", padding: "8px" }}>Id.</th>
              <th style={{ border: "1px solid lightblue", padding: "8px" }}>Nombre</th>
              <th style={{ border: "1px solid lightblue", padding: "8px" }}>Año</th>
              <th style={{ border: "1px solid lightblue", padding: "8px" }}>Autor</th>
            </tr>
          </thead>
          <tbody>
            {librosFiltrados.map((libro) => (
              <tr key={libro.id}>
                <td style={{ border: "1px solid lightblue", padding: "8px" }}>{libro.id}</td>
                <td style={{ border: "1px solid lightblue", padding: "8px" }}>{libro.nom}</td>
                <td style={{ border: "1px solid lightblue", padding: "8px" }}>{libro.anho}</td>
                <td style={{ border: "1px solid lightblue", padding: "8px" }}>{libro.autor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron libros para ese autor.</p>
      )}
    </div>
  );
}

export default LibrosPage;
