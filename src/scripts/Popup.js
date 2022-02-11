export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    open() {
        this._popup.classList.add('modal_active');
        document.addEventListener('keyup', this._handleEscClose.bind(this));
    }

    close() {
        this._popup.classList.remove('modal_active');
        document.removeEventListener('keyup', this._handleEscClose.bind(this));
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close(document.querySelector('.modal_active'));
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
                this.close();
            }
        });
    }
}
