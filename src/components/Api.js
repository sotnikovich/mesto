export default class Api {
    constructor(data) {
        this._baseUrl = data.serverUrl;
        this._token = data.token;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}users/me`, {
            headers: {
                authorization: this._token,
            }
        }).then((res) => this._checkResult(res));
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
            headers: {
                authorization: this._token,
            }
        }).then((res) => this._checkResult(res));
    }

    editProfile(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })
        }).then((res) => this._checkResult(res));
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }).then((res) => this._checkResult(res));
    }

    removeCard(data) {
        return fetch(`${this._baseUrl}cards/${data}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        }).then((res) => this._checkResult(res));
    }

    addCardLike(data) {
        return fetch(`${this._baseUrl}cards/likes/${data}`, {
            method: "PUT",
            headers: {
                authorization: this._token
            }
        }).then((res) => this._checkResult(res));
    }

    removeCardLike(data) {
        return fetch(`${this._baseUrl}cards/likes/${data}`, {
            method: "DELETE",
            headers: {
                authorization: this._token
            }
        }).then((res) => this._checkResult(res));
    }

    updateAvatar(data) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then((res) => this._checkResult(res));
    }
}