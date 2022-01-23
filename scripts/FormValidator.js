export const enableValidation = ({
    formSelector: '.form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__submit',
    inactiveButtonClass: 'modal__submit_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__error_visible'
});

export class FormValidator {
    constructor(formElements, form) {
        this._form = form;
        this._formSelector = formElements.formSelector;
        this._inputSelector = formElements.inputSelector;
        this._submitButtonSelector = formElements.submitButtonSelector;
        this._inactiveButtonClass = formElements.inactiveButtonClass;
        this._inputErrorClass = formElements.inputErrorClass;
        this._errorClass = formElements.errorClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    _showInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}Error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}Error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._openFormButtons = Array.from(document.querySelectorAll('.button-open-form'));
        this._openFormButtons.forEach(button => {
            button.addEventListener('click', () => {
                this._toggleButtonState();
            })
        })

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState() {
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
        if (this._hasInvalidInput()) {
            this._buttonElement.disabled = true;
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    enableValidation() {
        this._setEventListeners();
    }
}
