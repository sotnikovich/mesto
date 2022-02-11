export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add('modal_active');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('modal_active');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
                this.close();
            }
        });
    }
}