import React from 'react';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

  return (
    <main className="content">
      <section className="profile" aria-label="Данные профиля">
        <div className="profile__avatar-wrapper">
          <img src="#" alt="Аватар пользователя" className="profile__avatar" />
          <button type="button" className="profile__avatar-button" aria-label="Изменить аватар" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button type="button" className="button profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
          <p className="profile__description"></p>
        </div>
        <button type="button" className="button profile__add-button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Карточки профиля">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
