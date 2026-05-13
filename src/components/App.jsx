import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const[plants, setPlants] = useState([])

  function handleNewPlantSubmit(newPlant) {
      setPlants([...plants, newPlant])
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data =>{ console.log("API DATA:", data);
      setPlants(data);})
      .catch(err => console.error("API ERROR:", err));
  }, [])
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onNewPlantSubmit={handleNewPlantSubmit}/>
    </div>
  );
}

export default App;
