import React from "react";

function PopupWithForm (props) {

return (
  <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button type="button" className="button popup__close" aria-label="Закрыть"></button>
          <h3 className="popup__heading">{props.title}</h3>
          <form name={props.name} className="popup__form">
            {props.children}
            <button type="submit" className="button popup__button">Сохранить</button>
          </form>
        </div>
      </div>
);
}

export default PopupWithForm;
