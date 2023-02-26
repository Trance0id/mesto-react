import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit">
        <input type="text" placeholder="Имя" className="popup__input" name="name" required minLength="2" maxLength="40"
          autoComplete="off" />
        <div className="popup__error name-error"></div>
        <input type="text" placeholder="Вид деятельности" className="popup__input" name="about" required minLength="2"
          maxLength="200" autoComplete="off" />
        <div className="popup__error about-error"></div>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="add">
        <input type="text" className="popup__input" name="name" placeholder="Название" required minLength="2"
          maxLength="30" autoComplete="off" />
        <div className="popup__error name-error"></div>
        <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required
          autoComplete="off" />
        <div className="popup__error link-error"></div>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="avatar">
        <input type="url" className="popup__input" name="avatar" placeholder="Ссылка на аватар" required
          autoComplete="off" />
        <div className="popup__error avatar-error"></div>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="delete" />

      <ImagePopup />

      <template className="card-template">
        <li className="card">
          <img className="card__image" src="#" alt="" />
          <div className="card__caption">
            <h2 className="card__caption-title"></h2>
            <div className="card__like">
              <button type="button" className="button card__button-like" aria-label="Нравится"></button>
              <span className="card__likes-number">0</span>
            </div>
          </div>
          <button type="button" className="button card__button-delete" aria-label="Удалить"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
