import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState(plants);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(p => { setPlants(p); setFilteredPlants(p); });
  }, [plants]);

  function handleSearch(query) {
    if (query !== "") {
      setFilteredPlants(plants.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredPlants(plants);
    }
  }
  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant]);
    handleSearch("");
  }

  return (
    <main>
      <NewPlantForm submitPlant={handleNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
