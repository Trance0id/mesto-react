import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";
// import useValidation from "../hooks/useValidation.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, formIsLoading }) {
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  // const validation = useValidation();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formIsLoading={formIsLoading}
      submitButtonText="Сохранить"
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
        value={name || ""}
        onChange={handleNameChange}
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
        value={description || ""}
        onChange={handleDescriptionChange}
      />
      <div className="popup__error about-error"></div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
