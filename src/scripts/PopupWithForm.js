import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleSubmitForm }) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formSubmit = this._formSubmit.bind(this);
        this._formElement = this._popup.querySelector('.form');
        this._inputList = Array.from(this._formElement.querySelectorAll('.modal__input'));
    }

    _formSubmit(e) {
        e.preventDefault();
        this._handleSubmitForm(this._getInputValues());
    }

    _getInputValues() {
        const data = {};
        this._inputList.forEach((inputElement) => {
            data[inputElement.name] = inputElement.value;
        });
        return data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._formSubmit);
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}
