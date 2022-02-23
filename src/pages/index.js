import './index.css';
import {
    editBtn,
    addBtn,
    avaBtn,
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
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort36/",
    headers: {
        authorization: '8c8ed8aa-4046-4be0-b3e7-9f814b718ab1',
        'Content-Type': 'application/json'
    }
});

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

const editPopup = new PopupWithForm('.modal-edit', {
    handleSubmitForm: (data) => {
        editPopup.loadData(true);
        api.editProfile(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                editPopup.close();
            })
            .catch((err) => console.log(err))
            .finally(() => {
                editPopup.loadData(false);
            });
    }
});
editPopup.setEventListeners();
editBtn.addEventListener('click', () => {
    editPopup.open();
    const data = userInfo.getUserInfo();
    nameInput.value = data.name;
    jobInput.value = data.job;
    formValidators['editForm'].resetValidation();
})

const addPopup = new PopupWithForm('.modal-add', {
    handleSubmitForm: (data) => {
        addPopup.loadData(true);
        const item = { name: data.title, link: data.link };
        api.addNewCard(item)
            .then((res) => {
                section.addItem(createCard(res), true);
                addPopup.close();
            })
            .catch((err) => console.log(err))
            .finally(() => {
                addPopup.loadData(false);
            });
    }
});
addPopup.setEventListeners();
addBtn.addEventListener('click', () => {
    addPopup.open();
    formValidators['addForm'].resetValidation();
});

const editAvatar = new PopupWithForm('.modal-avatar', {
    handleSubmitForm: (data) => {
        editAvatar.loadData(true);
        api.updateAvatar(data)
            .then((res) => {
                userInfo.setUserAvatar(res);
                editAvatar.close();
            })
            .catch((err) => console.log(err))
            .finally(() => {
                editAvatar.loadData(false);
            });
    }
})
editAvatar.setEventListeners();
avaBtn.addEventListener('click', () => {
    editAvatar.open();
    formValidators['avatarForm'].resetValidation();
})

const popupWithImage = new PopupWithImage('.modal-img');
popupWithImage.setEventListeners();

function openImg(e) {
    const data = {
        image: e.target.src,
        text: e.target.closest('.element').querySelector('.element__caption').textContent
    };
    popupWithImage.open(data);
};

function deleteCard(data) {
    popupConfirm.data = data;
    popupConfirm.open();
};

let userId, addCardLike, removeCardLike;

function createCard(data) {
    const card = new Card(data, '.template__element', userId, openImg,
        (addCardLike = (data) => {
            return api.addCardLike(data);
        }),
        (removeCardLike = (data) => {
            return api.removeCardLike(data);
        }),
        deleteCard
    )
    return card.renderCard(data);
};

const popupConfirm = new PopupWithConfirm('.modal-confirm', {
    handleSubmitForm: (data) => {
        api.removeCard(data.cardId)
            .then(() => {
                data.card.remove();
                popupConfirm.close();
            })
            .catch((err) => console.log(err));
    }
});
popupConfirm.setEventListeners();

const section = new Section({
        renderItems: (data) => {
            section.addItem(createCard(data));
        }
    },
    '.elements'
);

const initialData = [api.getUserInfo(), api.getInitialCards()];
Promise.all(initialData)
    .then(([userData, cards]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);
        userInfo.setUserAvatar(userData);
        section.renderItems(cards.reverse());
    })
    .catch((err) => console.log(err));

const formValidators = {};
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