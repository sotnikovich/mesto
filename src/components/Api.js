export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}users/me`, {
            headers: this._headers
        }).then((res) => this._checkResult(res));
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
            headers: this._headers
        }).then((res) => this._checkResult(res));
    }

    editProfile(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })
        }).then((res) => this._checkResult(res));
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }).then((res) => this._checkResult(res));
    }

    removeCard(data) {
        return fetch(`${this._baseUrl}cards/${data}`, {
            method: "DELETE",
            headers: this._headers
        }).then((res) => this._checkResult(res));
    }

    addCardLike(data) {
        return fetch(`${this._baseUrl}cards/likes/${data}`, {
            method: "PUT",
            headers: this._headers
        }).then((res) => this._checkResult(res));
    }

    removeCardLike(data) {
        return fetch(`${this._baseUrl}cards/likes/${data}`, {
            method: "DELETE",
            headers: this._headers
        }).then((res) => this._checkResult(res));
    }

    updateAvatar(data) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then((res) => this._checkResult(res));
    }
}