const inputs = document.querySelectorAll('.modal__input');

inputs.forEach(input => {
    input.addEventListener('input', e => {
        console.log(input.validity.valid);
    })
})
