const edit = document.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');
const modalInner = document.querySelector('.modal__inner');

let nameInput = document.querySelector('.js-name');
let jobInput = document.querySelector('.js-job');
let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');

function openModal() {
    modal.classList.add('modal_active');
    document.body.classList.add('hidden');
    modalInner.classList.add('fade-in');
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

function formSubmitHandler(evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closeModal();
}

edit.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', overlayClick);
modalInner.addEventListener('submit', formSubmitHandler);
