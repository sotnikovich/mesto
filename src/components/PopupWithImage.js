import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.modal__img');
        this._caption = this._popup.querySelector('.modal__caption');
    }

    open(data) {
        super.open();
        this._image.src = data.image;
        this._image.alt = data.text;
        this._caption.textContent = data.text;
    }
}