const scrollBarInput = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

scrollBarInput.addEventListener('input', () => {
    const fontSize = scrollBarInput.value + 'px'; 
    textElement.style.fontSize = fontSize; 
});
