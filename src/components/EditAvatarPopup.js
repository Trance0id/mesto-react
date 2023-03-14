import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, formIsLoading }) {
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value,
    });

    avatar.current.value = "";
  }

  const avatar = React.useRef();

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formIsLoading={formIsLoading}
      submitButtonText="Обновить"
    >
      <input
        ref={avatar}
        type="text"
        className="popup__input"
        name="avatar"
        placeholder="Ссылка на аватар"
        required
        minLength="2"
        autoComplete="off"
      />
      <div className="popup__error avatar-error"></div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
