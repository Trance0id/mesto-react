import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onLinkChange(e) {
    setLink(e.target.value);
  }

  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name || ""}
        onChange={onNameChange}
      />
      <div className="popup__error name-error"></div>
      <input
        type="url"
        className="popup__input"
        name="link"
        placeholder="Ссылка на картинку"
        required
        autoComplete="off"
        value={link || ""}
        onChange={onLinkChange}
      />
      <div className="popup__error link-error"></div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
