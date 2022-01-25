import { initialCards } from "./initialCards.js"
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const editModal = document.querySelector('.modal-edit');
const addModal = document.querySelector('.modal-add');
export const imgPopup = document.querySelector('.modal-img');

const addForm = document.forms.addForm;
const editForm = document.forms.editForm;

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');

const closeEditBtn = document.querySelector('.modal__close_type_edit');
const closeAddBtn = document.querySelector('.modal__close_type_add');
const closeImgBtn = document.querySelector('.modal__close_type_img');

const profile = document.querySelector('.modal__profile');
const nameInput = document.querySelector('.modal__input_type_name');
const jobInput = document.querySelector('.modal__input_type_job');
const placeInput = document.querySelector('.modal__input_type_title');
const imgInput = document.querySelector('.modal__input_type_link');
export const captionModal = document.querySelector('.modal__caption');
export const imageModal = document.querySelector('.modal__img');
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');
const elements = document.querySelector('.elements');

const enableValidation = ({
    formSelector: '.form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__submit',
    inactiveButtonClass: 'modal__submit_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__error_visible'
});

export function openPopup(popup) {
    popup.classList.add('modal_active');
    document.body.addEventListener('keyup', closeWithEsc);
}

function closePopup(popup) {
    popup.classList.remove('modal_active');
    document.body.removeEventListener('keyup', closeWithEsc);
}

function closeWithOverlay(popup) {
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
            closePopup(popup);
        }
    });
}

closeWithOverlay(editModal);
closeWithOverlay(addModal);
closeWithOverlay(imgPopup);

function closeWithEsc(e) {
    if (e.key === 'Escape') {
        closePopup(document.querySelector('.modal_active'));
    }
}

function resetForm(form) {
    form.reset();
}

function fillForm(e) {
    e.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup(editModal);
}

function createCard(item) {
    const card = new Card(item, '.template__element');
    return card.renderCard();
}

editBtn.addEventListener('click', () => {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
    openPopup(editModal);
    editPopupValidation.hideError();
})

addBtn.addEventListener('click', () => {
    openPopup(addModal);
    addPopupValidation.hideError();
    resetForm(addForm);
})

closeAddBtn.addEventListener('click', () => closePopup(addModal));
closeEditBtn.addEventListener('click', () => closePopup(editModal));
closeImgBtn.addEventListener('click', () => closePopup(imgPopup));
profile.addEventListener('submit', fillForm);

initialCards.forEach((item) => {
    elements.append(createCard(item));
});

addModal.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCard = {
        name: placeInput.value,
        alt: placeInput.value,
        link: imgInput.value
    };

    elements.prepend(createCard(newCard));
    closePopup(addModal);
})

const editPopupValidation = new FormValidator(enableValidation, editForm);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(enableValidation, addForm);
addPopupValidation.enableValidation();