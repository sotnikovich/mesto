const inputs = document.querySelectorAll('.modal__input');
const addForm = document.forms.addForm;
const editForm = document.forms.editForm;

const validationConfig = {
    inputErrorClass: 'modal__input-error'
};

const showInputError = (formElement, inputElement, { inputErrorClass }, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass)
}

const hideInputError = (formElement, inputElement, { inputErrorClass }) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`);
    errorElement.textContent = '';
    inputElement.classList.remove(inputErrorClass);
}

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (!e.currentTarget.validity.valid) {
            showInputError(addForm, e.currentTarget, validationConfig, e.currentTarget.validationMessage)
        } else {
            hideInputError(addForm, e.currentTarget, validationConfig)
        }
    })
})

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (!e.currentTarget.validity.valid) {
            showInputError(editForm, e.currentTarget, validationConfig, e.currentTarget.validationMessage)
        } else {
            hideInputError(editForm, e.currentTarget, validationConfig)
        }
    })
})
