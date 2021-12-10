const edit = document.querySelector('.profile__edit-button');
const editModal = document.querySelector('.modal-edit');
const closeEdit = document.querySelector('.modal__close_type_edit');
const closeAddBtn = document.querySelector('.modal__close_type_add');
const popup = document.querySelector('.modal__profile');
const add = document.querySelector('.profile__add-button');
const addModal = document.querySelector('.modal-add');
const nameInput = document.querySelector('.modal__input_type_name');
const jobInput = document.querySelector('.modal__input_type_job');
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');
const like = document.querySelectorAll('.element__like');

function openModal() { //открытие попап
    editModal.classList.add('modal_active');
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
}

function closeModal() { //закрытие попап
    editModal.classList.remove('modal_active');
}

function openAdd() {
    addModal.classList.add('modal_active');
}

function closeAdd() {
    addModal.classList.remove('modal_active');
}

function formSubmitHandler(evt) { //заполнение профиля
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closeModal();
}

//function formSubmitAdd(evt) { //заполнение профиля
//evt.preventDefault();
//newName.textContent = nameInput.value;
//newJob.textContent = jobInput.value;
//closeModal();
//}

edit.addEventListener('click', openModal);
add.addEventListener('click', openAdd);
closeEdit.addEventListener('click', closeModal);
closeAddBtn.addEventListener('click', closeAdd);

for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function() {
        like[i].classList.toggle('element__like_active');
    });
}

popup.addEventListener('submit', formSubmitHandler);