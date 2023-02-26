import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    // console.log(`card ${card.name} clicked!`)
    onCardClick(card)
  }

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
      <div className="card__caption">
        <h2 className="card__caption-title">{card.name}</h2>
        <div className="card__like">
          <button type="button" className="button card__button-like" aria-label="Нравится"></button>
          <span className="card__likes-number">{card.likes.length}</span>
        </div>
      </div>
      <button type="button" className="button card__button-delete card__button-delete_visible" aria-label="Удалить"></button>
    </li>
  );
}

export default Card;
