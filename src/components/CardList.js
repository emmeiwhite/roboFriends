import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("NOOOOOOOOOO!");
  }
  const cardsArray = robots.map((card) => {
    return (
      <Card id={card.id} name={card.name} email={card.email} key={card.id} />
    );
  });
  return <div className="robots-wrapper">{cardsArray}</div>;
};

export default CardList;
