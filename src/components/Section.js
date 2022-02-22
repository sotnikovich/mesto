export default class Section {
    constructor({ renderItems }, containerSelector) {
        this._renderer = renderItems;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
}