export default class Card {
    constructor(data, cardTemplate, userId, imagePopup, addCardLike, deleteCardLike, deleteCard) {
        this._data = data;
        this._cardTemplate = cardTemplate;
        this._userId = userId;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._imagePopup = imagePopup;
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._likeCounter = this._element.querySelector('.element__counter');
        this._deleteCard = deleteCard;
        this._addCardLike = addCardLike;
        this._deleteCardLike = deleteCardLike;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    renderCard() {
        this._setEventListeners();
        const cardImage = this._element.querySelector('.element__img');
        cardImage.src = this._data.link;
        cardImage.alt = this._data.alt;
        this._element.querySelector('.element__caption').textContent = this._data.name;
        this._likeCounter.textContent = this._data.likes.length;
        this._checkLikes();
        return this._element;
    }

    _setEventListeners() {
        if (this._cardOwnerId === this._userId) {
            this._deleteButton.classList.add('element__delete_active');
            this._deleteButton.addEventListener('click', () => this._deleteButtonClick());
        }
        this._likeButton.addEventListener('click', () => this._toggleLikeState());
        this._element.querySelector('.element__img').addEventListener('click', this._imagePopup);
    }

    _toggleLikeState() {
        if (!this._likeButton.classList.contains('element__like_active')) {
            this._addCardLike(this._cardId)
                .then((res) => {
                    this._data = res;
                    this._likeCounter.textContent = res.likes.length;
                    this._likeButton.classList.add('element__like_active');
                })
                .catch((err) => console.log(err));
        } else {
            this._deleteCardLike(this._cardId)
                .then((res) => {
                    this._data = res;
                    this._likeCounter.textContent = res.likes.length;
                    this._likeButton.classList.remove('element__like_active');
                })
                .catch((err) => console.log(err));
        }
    }

    _checkLikes() {
        if (this._data.likes.some(item => item._id === this._userId)) {
            this._likeButton.classList.add('element__like_active');
        }
    }

    _deleteButtonClick() {
        const data = {
            card: this._element,
            cardId: this._cardId
        };
        this._deleteCard(data);
    }
}