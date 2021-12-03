const edit = document.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');
const popup = document.querySelector('.modal__profile');
const save = document.querySelector('.modal__submit');
let nameInput = document.querySelector('.modal__input_type_name');
let jobInput = document.querySelector('.modal__input_type_job');
let newName = document.querySelector('.profile__title');
let newJob = document.querySelector('.profile__subtitle');

function openModal() { //открытие попап
    modal.classList.add('modal_active');
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
}

function closeModal() { //закрытие попап
    modal.classList.remove('modal_active');
}

function formSubmitHandler(evt) { //заполнение профиля
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    save.contains(evt.target);
    closeModal();
}

edit.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
popup.addEventListener('submit', formSubmitHandler);
