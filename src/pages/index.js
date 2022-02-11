import './index.css';

import { initialCards } from '../utils/initialCards.js';
import {
    editBtn,
    addBtn,
    nameInput,
    jobInput,
    validationConfig
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const editPopup = new PopupWithForm('.modal-edit', {
    handleSubmitForm: (info) => {
        userInfo.setUserInfo(info);
        editPopup.close();
    }
});
editPopup.setEventListeners();
editBtn.addEventListener('click', () => {
    editPopup.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    formValidators['editForm'].resetValidation();
})

const popupWithImage = new PopupWithImage('.modal-img');
popupWithImage.setEventListeners();

function createCard(item) {
    const card = new Card(item, '.template__element', () => {
        popupWithImage.open(item.link, item.name);
    });
    return card.renderCard();
};

const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item, '.template__element');
        defaultCardList.addItem(cardElement);
    },
}, '.elements');
defaultCardList.renderItems();

const addPopup = new PopupWithForm('.modal-add', {
    handleSubmitForm: (data) => {
        const item = { name: data.title, link: data.link };
        defaultCardList.addNewItem(createCard(item));
        addPopup.close();
    },
});
addPopup.setEventListeners();
addBtn.addEventListener('click', () => {
    addPopup.open();
    formValidators['addForm'].resetValidation();
});

const formValidators = {}
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((form) => {
        const validator = new FormValidator(config, form);
        const formName = form.getAttribute('name');
        formValidators[formName] = validator;
        validator.enableValidation();
    });
};
enableValidation(validationConfig);