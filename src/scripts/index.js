import '../pages/index.css';

import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm';
import UserInfo from './UserInfo.js';

const editModal = document.querySelector('.modal-edit');
const addModal = document.querySelector('.modal-add');
const imgPopup = document.querySelector('.modal-img');
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.modal__input_type_name');
const jobInput = document.querySelector('.modal__input_type_job');
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('.template__element');
const validationConfig = ({
    formSelector: '.form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__submit',
    inactiveButtonClass: 'modal__submit_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__error_visible'
});

const userInfo = new UserInfo(newName, newJob);
const editPopup = new PopupWithForm(editModal, {
    handleSubmitForm: (info) => {
        userInfo.setUserInfo(info);
        editPopup.close();
    }
});
editPopup.setEventListeners();
const editPopupValidation = new FormValidator(validationConfig, editModal);
editBtn.addEventListener('click', () => {
    editPopup.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    editPopupValidation.enableValidation();
    editPopupValidation.hideError();
})

const popupWithImage = new PopupWithImage(imgPopup);
popupWithImage.setEventListeners();

function createCard(item) {
    const card = new Card(item, templateElement, () => {
        popupWithImage.open(item.link, item.name);
    });
    return card.renderCard();
};

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item, templateElement);
        defaultCardList.addItem(cardElement);
    },
}, elements);
defaultCardList.renderItems();

const addPopup = new PopupWithForm(addModal, {
    handleSubmitForm: (data) => {
        const item = { name: data.title, link: data.link };
        defaultCardList.addNewItem(createCard(item));
        addPopup.close();
    },
});
addPopup.setEventListeners();
const addPopupValidation = new FormValidator(validationConfig, addModal);
addBtn.addEventListener('click', () => {
    addPopup.open();
    addPopupValidation.enableValidation();
    addPopupValidation.hideError();
});
