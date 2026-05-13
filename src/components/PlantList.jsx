import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchText}) {
  return (
    <ul className="cards">{plants
      .filter((plant) => plant.name.toLowerCase().includes(searchText.toLowerCase()))
      .map((plant) => (
      <PlantCard 
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price} 
      />
    ))}
    </ul>
  );
}

export default PlantList;
