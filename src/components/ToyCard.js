import React, {useState} from "react";

function ToyCard({ toy, deleteFunct }) {
  const [likes, setLikes] = useState(toy.likes);

  function handleDeleteClick(){
    deleteFunct(toy);
  }

  function handleLikeClick(){
    const newLikes = likes+1;
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        "likes" : newLikes,
      }),
    }).then((r)=>r.json()).then(
      (data) => {
        setLikes(newLikes);
      }
    )
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={ toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes/* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
