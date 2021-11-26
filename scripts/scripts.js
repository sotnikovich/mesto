const edit = document.querySelector('.js-profile__edit-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');
const modalInner = document.querySelector('.modal__inner');

function openModal() {
    modal.classList.add('modal_active');
    document.body.classList.add('hidden');
}

function closeModal() {
    modal.classList.remove('modal_active');
    document.body.classList.remove('hidden');
}

function overlayClick(e) {
    if (!modalInner.contains(e.target)) {
        closeModal();
    }
}

edit.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', overlayClick);

let formElement = document.querySelector('.modal__inner');
let nameInput = document.querySelector('js-name');
let jobInput = document.querySelector('js-job');

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameInput.value = value;
    jobInput.value = value;

}

formElement.addEventListener('submit', formSubmitHandler);
