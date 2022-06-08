import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const api = "http://localhost:3001/toys";

  const [showForm, setShowForm] = useState(false);

  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch(api).then(r=>r.json()).then((data) => {
      console.log(data);
      setToyList(data);
    })
  }, [])

  function addNewToy(toy){
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(toy),
    }).then(r=>r.json()).then(( data ) => {
      console.log(data);
      const newToyList = [...toyList, toy];
      setToyList(newToyList);
    })
  }

  function deleteToy(toy){
    fetch(`${api}/${toy.id}`, {
      method: "DELETE",
    }).then(r=>r.json()).then( ()=>{
      const updatedList = toyList.filter((t)=> t.id !== toy.id);
      setToyList(updatedList);
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toyList} deleteFunct={deleteToy} />
    </>
  );
}

export default App;
