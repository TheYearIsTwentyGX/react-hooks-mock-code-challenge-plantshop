import React, {useState} from "react";

function NewPlantForm({submitPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  
  function changeValue(e) {
    switch (e.target.name) {
      case "name":
        console.log("name");
        setName(e.target.value);
        break;
      case "image":
        console.log("image");
        setImage(e.target.value);
        break;
      case "price":
        console.log("price");
        setPrice(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {name, image, price};
    submitPlant(newPlant);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      });
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={changeValue} type="text" name="name" placeholder="Plant name" />
        <input onChange={changeValue} type="text" name="image" placeholder="Image URL" />
        <input onChange={changeValue} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
