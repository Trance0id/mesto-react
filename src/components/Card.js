function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    <li className="card">
      <div className="card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleCardClick}></div>
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
