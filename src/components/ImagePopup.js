import React from "react";
 function ImagePopup() {
  return (
    <div className="popup popup_type_zoom">
      <div className="popup__img-container">
        <button type="button" className="button popup__close" aria-label="Закрыть"></button>
        <figure className="popup__figure">
          <img className="popup__img" src="#" alt="" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
 }

 export default ImagePopup;
