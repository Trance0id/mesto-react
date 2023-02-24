import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" className="button popup__close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Редактировать профиль</h3>
          <form name="edit-profile" className="popup__form">
            <input type="text" placeholder="Имя" className="popup__input" name="name" required minLength="2" maxLength="40"
              autoComplete="off" />
            <div className="popup__error name-error"></div>
            <input type="text" placeholder="Вид деятельности" className="popup__input" name="about" required minLength="2"
              maxLength="200" autoComplete="off" />
            <div className="popup__error about-error"></div>
            <button type="submit" className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button type="button" className="button popup__close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Новое место</h3>
          <form name="add-card" className="popup__form">
            <input type="text" className="popup__input" name="name" placeholder="Название" required minLength="2"
              maxLength="30" autoComplete="off" />
            <div className="popup__error name-error"></div>
            <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" required
              autoComplete="off" />
            <div className="popup__error link-error"></div>
            <button type="submit" className="button popup__button">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_zoom">
        <div className="popup__img-container">
          <button type="button" className="button popup__close" aria-label="Закрыть"></button>
          <figure className="popup__figure">
            <img className="popup__img" src="#" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button type="button" className="button popup__close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Обновить аватар</h3>
          <form name="change-avatar" className="popup__form">
            <input type="url" className="popup__input" name="avatar" placeholder="Ссылка на аватар" required
              autoComplete="off" />
            <div className="popup__error avatar-error"></div>
            <button type="submit" className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button type="button" className="button popup__close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">Вы уверены?</h3>
          <form name="delete-card" className="popup__form">
            <button type="submit" className="button popup__button">Да</button>
          </form>
        </div>
      </div>

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
