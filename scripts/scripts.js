const edit = document.querySelector('.profile__edit-button');
const editModal = document.querySelector('.modal-edit');
const closeEdit = document.querySelector('.modal__close_type_edit');
const closeAddBtn = document.querySelector('.modal__close_type_add');
const popup = document.querySelector('.modal__profile');
const add = document.querySelector('.profile__add-button');
const addModal = document.querySelector('.modal-add');
const nameInput = document.querySelector('.modal__input_type_name');
const jobInput = document.querySelector('.modal__input_type_job');
const placeInput = document.querySelector('.modal__input_type_title');
const imgInput = document.querySelector('.modal__input_type_link');
const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');
const templateElement = document.querySelector('.template__element').content;
const elements = document.querySelector('.elements');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach(function(element) {
    const cardElement = templateElement.cloneNode(true);

    cardElement.querySelector('.element__caption').textContent = element.name;
    cardElement.querySelector('.element__img').src = element.link;

    elements.append(cardElement);
});

const like = document.querySelectorAll('.element__like');
for (let a = 0; a < like.length; a++) {
    like[a].addEventListener('click', function() {
        like[a].classList.toggle('element__like_active');
    });
}

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

popup.addEventListener('submit', formSubmitHandler);

addModal.addEventListener('submit', e => { //Добавить карточку
    e.preventDefault();

    const newItem = templateElement.cloneNode(true).querySelector('.element');
    newItem.querySelector('.element__caption').textContent = placeInput.value;
    newItem.querySelector('.element__img').src = imgInput.value;
    elements.insertAdjacentElement('afterbegin', newItem);
    closeAdd();
    placeInput.value = '';
    imgInput.value = '';
})

const deleteButton = document.querySelector('.element__delete');
deleteButton.addEventListener('click', e => {
    console.log(e.currentTarget);
})

edit.addEventListener('click', openModal);
add.addEventListener('click', openAdd);
closeEdit.addEventListener('click', closeModal);
closeAddBtn.addEventListener('click', closeAdd);