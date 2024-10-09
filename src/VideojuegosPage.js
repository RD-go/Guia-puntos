import React, { useState, useEffect } from "react";

const videoGamesData = [
  { id: 1, nombre: "FC 2024", anho: 2024, descripcion: "EA Sports FC 24 es un videojuego de fútbol, desarrollado por EA y publicado por EA Sports." },
  { id: 2, nombre: "GTA VI", anho: 2025, descripcion: "Grand Theft Auto VI es un próximo videojuego que está siendo desarrollado por Rockstar Games." },
  { id: 3, nombre: "Baldur's Gate III", anho: 2023, descripcion: "Baldur's Gate III es un videojuego de rol desarrollado por Larian Studios." },
];

function VideojuegosPage() {
  const [selectedYear, setSelectedYear] = useState("Todos");
  const [filteredGames, setFilteredGames] = useState([]);
  const [name, setName] = useState(sessionStorage.getItem("name") || ""); 

  useEffect(() => {
    const fetchVideoGames = () => {
      const filtered = videoGamesData.filter((game) =>
        selectedYear === "Todos" ? true : game.anho.toString() === selectedYear
      );
      setFilteredGames(filtered);
    };

    fetchVideoGames();
  }, [selectedYear]);

  return (
    <div style={{ padding: "20px", 
                  fontFamily: "Arial, sans-serif" 
    }}>
      <h1>Videojuegos</h1>
      {name && <p>Nombre ingresado: {name}</p>}

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        style={{padding: "10px", 
                marginBottom: "20px", 
                fontSize: "16px" 
        }}
      >
        <option value="Todos">Todos</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>

      {filteredGames.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {filteredGames.map((game) => (
            <div key={game.id} style={{ border: "1px solid lightblue", padding: "15px", marginBottom: "10px" }}>
              <h2>{game.nombre} ({game.anho})</h2>
              <p>{game.descripcion}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay videojuegos para el año seleccionado.</p>
      )}
    </div>
  );
}

export default VideojuegosPage;
