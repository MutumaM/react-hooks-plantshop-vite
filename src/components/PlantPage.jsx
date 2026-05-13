import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onNewPlantSubmit}) {
  const [searchText, setSearchText] = useState('')

  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit}/>
      <Search setSearchText={setSearchText}/>
      <PlantList plants={plants} searchText={searchText}/>
    </main>
  );
}

export default PlantPage;
