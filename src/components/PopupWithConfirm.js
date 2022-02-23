import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, { handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popup.querySelector('.form');
        this._formSubmit = this._formSubmit.bind(this);
    }

    _formSubmit(e) {
        e.preventDefault();
        this._handleSubmitForm(this.data);
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._formSubmit);
    }
}