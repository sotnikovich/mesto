const popup = document.querySelectorAll('.modal');

const editModal = document.querySelector('.modal-edit');
const addModal = document.querySelector('.modal-add');
const imgPopup = document.querySelector('.modal-img');

const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');

const closeEditBtn = document.querySelector('.modal__close_type_edit');
const closeAddBtn = document.querySelector('.modal__close_type_add');
const closeImgBtn = document.querySelector('.modal__close_type_img');

const profile = document.querySelector('.modal__profile');
const nameInput = document.querySelector('.modal__input_type_name');
const jobInput = document.querySelector('.modal__input_type_job');
const placeInput = document.querySelector('.modal__input_type_title');
const imgInput = document.querySelector('.modal__input_type_link');
const captionModal = document.querySelector('.modal__caption');
const imageModal = document.querySelector('.modal__img');

const newName = document.querySelector('.profile__title');
const newJob = document.querySelector('.profile__subtitle');
const templateElement = document.querySelector('.template__element').content;
const elements = document.querySelector('.elements');

function openPopup(popup) {
    popup.classList.add('modal_active');
}

function closePopup(popup) {
    popup.classList.remove('modal_active');
}

editBtn.addEventListener('click', (e) => {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
    openPopup(editModal);
})

closeEditBtn.addEventListener('click', (e) => {
    closePopup(editModal);
})

addBtn.addEventListener('click', (e) => {
    openPopup(addModal);
})

closeAddBtn.addEventListener('click', (e) => {
    closePopup(addModal);
})

closeImgBtn.addEventListener('click', (e) => {
    closePopup(imgPopup);
})

function fillForm(e) {
    e.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup(editModal);
}

profile.addEventListener('submit', fillForm);

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
    const cardElement = createCard(element);
    elements.append(cardElement);
});

function createCard(card) {
    const cardElement = templateElement.cloneNode(true);
    cardElement.querySelector('.element__caption').textContent = card.name;
    cardElement.querySelector('.element__img').alt = card.name;
    cardElement.querySelector('.element__img').src = card.link;

    const openImg = (e) => {
        openPopup(imgPopup);
        imageModal.src = e.target.src;
        captionModal.textContent = e.target.alt;
    }

    const cards = cardElement.querySelectorAll('.element__img');
    cards.forEach(card => {
        card.addEventListener('click', openImg);
    })

    const like = cardElement.querySelector('.element__like');
    like.addEventListener('click', e => {
        e.target.classList.toggle('element__like_active');
    })

    const deleteButton = cardElement.querySelector('.element__delete');
    deleteButton.addEventListener('click', e => {
        e.currentTarget.closest('.element').remove()
    })
    return cardElement
}

addModal.addEventListener('submit', function(e) {
    e.preventDefault();
    const cardElement = createCard({
        name: placeInput.value,
        link: imgInput.value
    });
    elements.prepend(cardElement);
    closePopup(addModal);
    placeInput.value = '';
    imgInput.value = '';
})
