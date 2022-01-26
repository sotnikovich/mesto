export class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._errorList = Array.from(this._form.querySelectorAll('.modal__error'));
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

        this._formList = Array.from(document.querySelectorAll('.form'));
        this._formList.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
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

    hideError() {
        this._inputList.forEach((input) => {
            input.classList.remove(this._inputErrorClass);
        });

        this._errorList.forEach((error) => {
            error.classList.remove(this._errorClass);
            error.textContent = '';
        });
    };


    enableValidation() {
        this._setEventListeners();
    }
}