const nameInput = document.querySelector('#name-input')
nameInput.placeholder = "Tasteaza aici!"
console.dir(nameInput)
const nameOutput = document.querySelector('#name-output')
const defaultt = nameOutput.textContent
nameInput.addEventListener('input', function (){
    if (nameInput.value === "")
        nameOutput.textContent = defaultt;
    
    else
        nameOutput.innerHTML = nameInput.value;
}

)