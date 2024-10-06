const placeholderInput = document.querySelector('#validation-input');
console.dir(placeholderInput)


const requiredLength = Number(placeholderInput.getAttribute('data-length'));
console.dir(requiredLength)

placeholderInput.addEventListener('input', () => {
    if (placeholderInput.value.length === requiredLength) {
        
        placeholderInput.classList.add('valid');
        placeholderInput.classList.remove('invalid');
    } else {
        
        placeholderInput.classList.add('invalid');
        placeholderInput.classList.remove('valid');
    }
});
