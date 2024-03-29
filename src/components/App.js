import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ConfirmDeletionPopup from "./ConfirmDeletionPopup.js";

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
    setIsConfirmDeletionPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((prevCards) =>
          prevCards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.error(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      });
  }

  function handleCardDelete(cardId) {
    setFormIsLoading(true);
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((prevCards) => prevCards.filter((c) => c._id !== cardId));
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      })
      .finally(() => {
        setFormIsLoading(false);
      });
  }

  function handleCardDeleteClick(cardId) {
    setCardIdToDelete(cardId);
    setIsConfirmDeletionPopupOpen(true);
  }

  function handleUpdateUser(userInfo) {
    setFormIsLoading(true);
    api
      .setUserInfo(userInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      })
      .finally(() => {
        setFormIsLoading(false);
      });
  }

  function handleAddPlace(newCard) {
    setFormIsLoading(true);
    api
      .addNewPlace(newCard)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      })
      .finally(() => {
        setFormIsLoading(false);
      });
  }

  function handleUpdateAvatar(userAvatar) {
    setFormIsLoading(true);
    api
      .setUserAvatar(userAvatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      })
      .finally(() => {
        setFormIsLoading(false);
      });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmDeletionPopupOpen, setIsConfirmDeletionPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cardIdToDelete, setCardIdToDelete] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [formIsLoading, setFormIsLoading] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((results) => {
        setCurrentUser(results[0]);
        setCards(results[1]);
      })
      .catch((err) => {
        console.log(err);
        alert(`Не удалось получить ответ от сервера. \n${err}`);
      });
  }, []);

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }

  function addKeyListener() {
    document.addEventListener("keydown", handleKeyDown);
  }

  React.useEffect(addKeyListener, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          formIsLoading={formIsLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          formIsLoading={formIsLoading}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          formIsLoading={formIsLoading}
        />

        <ConfirmDeletionPopup
          isOpen={isConfirmDeletionPopupOpen}
          onClose={closeAllPopups}
          formIsLoading={formIsLoading}
          cardId={cardIdToDelete}
          onCardDelete={handleCardDelete}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
