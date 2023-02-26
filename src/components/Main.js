import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => {
        console.log(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      });

    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => {
        console.log(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Данные профиля">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
          <button type="button" className="profile__avatar-button" aria-label="Изменить аватар" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="button profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="button profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Карточки профиля">
        <ul className="cards__list">
          {
            cards.map(card =>
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            )
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
