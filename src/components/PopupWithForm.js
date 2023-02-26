import React from "react";

function PopupWithForm ({name, title, children, isOpen, onClose}) {

return (
  <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onClick={onClose}>
        <div className="popup__container" onClick={e => e.stopPropagation()}>
          <button type="button" className="button popup__close" aria-label="Закрыть" onClick={onClose}></button>
          <h3 className="popup__heading">{title}</h3>
          <form name={name} className="popup__form">
            {children}
            <button type="submit" className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div>
);
}

export default PopupWithForm;
