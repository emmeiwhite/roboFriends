import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <div className="card-item" key={id}>
      <img src={`https://robohash.org/${id}?200*200`} alt="Cartoon Robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
