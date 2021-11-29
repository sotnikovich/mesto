const edit = document.querySelector('.js-profile__edit-button');
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

let like = document.querySelector('.element__like');
let likes = document.querySelectorAll('.element__like');

[].forEach.call(likes, function(item) {
    item.addEventListener('click', function() {
        if (item.classList.contains('element__like_active')) {
            item.classList.remove('element__like_active');
        } else {
            item.classList.add('element__like_active');
        }
    });
});

edit.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', overlayClick);
modalInner.addEventListener('submit', formSubmitHandler);
