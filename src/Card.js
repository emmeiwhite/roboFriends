import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <div className="card-item" key={id}>
      <img src={`https://robohash.org/${id}?200x200`} alt="Cartoon Robot" />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
