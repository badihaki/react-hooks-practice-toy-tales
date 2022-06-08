import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [form, setForm] = useState({
    "name" : "",
    "image" : "",
    "likes" : 0,
  });

  function handleChangeForm(e){
    const key = e.target.name;
    const value = e.target.value;
    setForm({...form, [key]:value});
  }

  function handleFormSubmit(e){
    e.preventDefault();
    console.log(form);
    addToy(form);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={handleChangeForm}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={handleChangeForm}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
