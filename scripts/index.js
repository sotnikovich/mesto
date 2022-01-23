import { Card } from "./Card.js";
import { FormValidator, enableValidation } from "./FormValidator.js";

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

editBtn.addEventListener('click', () => {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
    openPopup(editModal);
    hideError(editForm);
})

addBtn.addEventListener('click', () => {
    openPopup(addModal);
    resetForm(addForm);
    hideError(addForm);
})

function resetForm(form) {
    form.reset();
}

function hideError(form) {
    const inputList = Array.from(form.querySelectorAll('.modal__input'));
    const errorList = Array.from(form.querySelectorAll('.modal__error'));

    inputList.forEach((input) => {
        input.classList.remove('modal__input_type_error');
    });

    errorList.forEach((error) => {
        error.classList.remove('modal__error_visible');
        error.textContent = '';
    });
};

closeAddBtn.addEventListener('click', () => closePopup(addModal));
closeEditBtn.addEventListener('click', () => closePopup(editModal));
closeImgBtn.addEventListener('click', () => closePopup(imgPopup));

function fillForm(e) {
    e.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup(editModal);
}

profile.addEventListener('submit', fillForm);

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Потрясающий вид на горы'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Лесное озеро'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Однотипные хрущевки в Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Одинокая гора'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Железнодорожный путь сквозь лоно дикой природы'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Массивный утес, омываемый водами Байкала'
    }
];

initialCards.forEach((item) => {
    const card = new Card(item, '.template__element');
    const cardElement = card.renderCard();
    elements.append(cardElement);
});


addModal.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCard = {
        name: placeInput.value,
        alt: placeInput.value,
        link: imgInput.value
    };
    const addCard = new Card(newCard, '.template__element');
    const cardElement = addCard.renderCard();
    elements.prepend(cardElement);
    closePopup(addModal);
    addForm.reset();
})

const editPopupValidation = new FormValidator(enableValidation, editForm);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(enableValidation, addForm);
addPopupValidation.enableValidation();
