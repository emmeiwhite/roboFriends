import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((card) => {
    return <Card id={card.id} name={card.name} email={card.email} />;
  });
  return <div className="robots-wrapper">{cardsArray}</div>;
};

export default CardList;
