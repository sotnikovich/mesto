import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    open(link, name) {
        super.open();
        this._popup.querySelector('.modal__img').src = link;
        this._popup.querySelector('.modal__caption').textContent = name;
    }
}
