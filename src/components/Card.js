function Card({ card, onCardClick, currentUser }) {
  function handleCardClick() {
    onCardClick(card);
  }

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  return (
    <li className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleCardClick}
      ></div>
      <div className="card__caption">
        <h2 className="card__caption-title">{card.name}</h2>
        <div className="card__like">
          <button
            type="button"
            className={`button card__button-like ${
              isLiked && "card__button-like_active"
            }`}
            aria-label="Нравится"
          ></button>
          <span className="card__likes-number">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && (
        <button
          type="button"
          className="button card__button-delete"
          aria-label="Удалить"
        ></button>
      )}
    </li>
  );
}

export default Card;
