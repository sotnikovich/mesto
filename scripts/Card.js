import { imgPopup, captionModal, imageModal, openPopup } from "./index.js";

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    renderCard() {
        this._element = this._getTemplate();
        this._picture = this._element.querySelector('.element__img');
        this._picture.src = this._link;
        this._element.querySelector('.element__caption').textContent = this._name;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._like = this._element.querySelector('.element__like');
        this._like.addEventListener('click', () => {
            this._likeButtonClick();
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteButtonClick();
        });
        this._picture.addEventListener('click', () => {
            this._openImg();
        });
    }

    _likeButtonClick() {
        this._like.classList.toggle('element__like_active');
    }

    _deleteButtonClick() {
        this._element.remove();
        this._element = null;
    }

    _openImg() {
        openPopup(imgPopup);
        imageModal.src = this._link;
        captionModal.textContent = this._name;
    }

}