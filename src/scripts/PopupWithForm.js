import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, fillForm) {
        super(popupSelector);
        this._fillForm = fillForm;
        this._formElement = this._popup.querySelector('.form');
    }

    _getInputValues() {
        this._inputList = this._formElement.querySelectorAll('.modal__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (e) => {
            e.preventDefault();
            this._getInputValues;
        })
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}