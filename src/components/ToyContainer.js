import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, deleteFunct }) {

  const toyCardComponents = toys.map( (toy) => {
    return (
      <ToyCard key={toy.id} toy={toy} deleteFunct={deleteFunct} />
    )
  })
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */ toyCardComponents}</div>
  );
}

export default ToyContainer;
