import React from 'react';

function Main() {
function handleEditAvatarClick () {
  const popupAvatar = document.querySelector('.popup_type_avatar');
  popupAvatar.classList.add('popup_opened');
}

function handleEditProfileClick () {
  const popupProfile = document.querySelector('.popup_type_edit');
  popupProfile.classList.add('popup_opened');
}

function handleAddPlaceClick () {
  const popupAdd = document.querySelector('.popup_type_add');
  popupAdd.classList.add('popup_opened');
}

    return (
        <main className="content">
            <section className="profile" aria-label="Данные профиля">
                <div className="profile__avatar-wrapper">
                    <img src="#" alt="Аватар пользователя" className="profile__avatar" />
                    <button type="button" className="profile__avatar-button" aria-label="Изменить аватар" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <button type="button" className="button profile__edit-button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
                    <p className="profile__description"></p>
                </div>
                <button type="button" className="button profile__add-button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="cards" aria-label="Карточки профиля">
                <ul className="cards__list"></ul>
            </section>
        </main>
    );
}

export default Main;
