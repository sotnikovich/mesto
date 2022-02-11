import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    open(link, name) {
        super.open();
        this._popupImg = this._popup.querySelector('.modal__img');
        this._popupCapt = this._popup.querySelector('.modal__caption');
        this._popupImg.src = link;
        this._popupImg.alt = name;
        this._popupCapt.textContent = name;
    }
}