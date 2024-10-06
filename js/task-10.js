function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amountInput = document.querySelector('#controls input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
    let size = 30; 
    const fragment = document.createDocumentFragment(); 

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div'); 
        box.style.width = `${size}px`; 
        box.style.height = `${size}px`; 
        box.style.backgroundColor = getRandomHexColor(); 
        box.style.margin = '5px'; 
        fragment.appendChild(box); 

        size += 10; 
    }

    boxesContainer.appendChild(fragment); 
}

function destroyBoxes() {
    boxesContainer.innerHTML = ''; 
}

createBtn.addEventListener('click', () => {
    const amount = parseInt(amountInput.value, 10); 
    if (amount > 0) {
        createBoxes(amount); 
    } else {
        alert('Please enter a valid number greater than 0.'); 
    }
});

destroyBtn.addEventListener('click', destroyBoxes); 
