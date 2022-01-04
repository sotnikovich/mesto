const editModal = document.querySelector('.modal-edit');
const addModal = document.querySelector('.modal-add');
const imgPopup = document.querySelector('.modal-img');

const addForm = document.forms.addForm;
const editForm = document.forms.editForm;

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
    document.body.addEventListener('keyup', closeWithEsc);
}

function closePopup(popup) {
    popup.classList.remove('modal_active');
    document.body.removeEventListener('keyup', closeWithEsc);
}

function closeWithOverlay(popup) {
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
            closePopup(popup);
        }
    });
}

closeWithOverlay(editModal);
closeWithOverlay(addModal);
closeWithOverlay(imgPopup);

function closeWithEsc(e) {
    if (e.key === 'Escape') {
        closePopup(document.querySelector('.modal_active'));
    }
}

editBtn.addEventListener('click', (e) => {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
    openPopup(editModal);
    hideError(editForm);
})

addBtn.addEventListener('click', (e) => {
    openPopup(addModal);
    hideError(addForm);
    resetForm(addForm);
})

closeAddBtn.addEventListener('click', () => closePopup(addModal));
closeEditBtn.addEventListener('click', () => closePopup(editModal));
closeImgBtn.addEventListener('click', () => closePopup(imgPopup));

function fillForm(e) {
    e.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    closePopup(editModal);
}

profile.addEventListener('submit', fillForm);

const resetForm = (form) => {
    form.reset()
}

initialCards.forEach(function(element) {
    const cardElement = createCard(element);
    elements.append(cardElement);
});

function createCard(card) {
    const cardElement = templateElement.cloneNode(true);
    const picture = cardElement.querySelector('.element__img');
    cardElement.querySelector('.element__caption').textContent = card.name;
    picture.alt = card.alt;
    picture.src = card.link;

    const openImg = (e) => {
        openPopup(imgPopup);
        imageModal.src = e.target.src;
        imageModal.alt = e.target.alt;
        captionModal.textContent = e.target.alt;
    }

    picture.addEventListener('click', openImg);

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
        alt: placeInput.value,
        link: imgInput.value
    });
    elements.prepend(cardElement);
    closePopup(addModal);
    addForm.reset();
})
