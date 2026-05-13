import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const[plants, setPlants] = useState([])

  function handleNewPlantSubmit(newPlant) {
      setPlants([...plants, newPlant])
  }

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onNewPlantSubmit={handleNewPlantSubmit}/>
    </div>
  );
}

export default App;
