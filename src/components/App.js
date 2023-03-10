import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.error(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      });
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            placeholder="Имя"
            className="popup__input"
            name="name"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <div className="popup__error name-error"></div>
          <input
            type="text"
            placeholder="Вид деятельности"
            className="popup__input"
            name="about"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <div className="popup__error about-error"></div>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
          <div className="popup__error name-error"></div>
          <input
            type="url"
            className="popup__input"
            name="link"
            placeholder="Ссылка на картинку"
            required
            autoComplete="off"
          />
          <div className="popup__error link-error"></div>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
          <div className="popup__error avatar-error"></div>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete" />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
