
  let counterValue = 0;

  // Selectăm elementele butoanelor și elementul unde afisam valoarea
  const decrementBtn = document.querySelector('[data-action="decrement"]');
  const incrementBtn = document.querySelector('[data-action="increment"]');
  const valueDisplay = document.getElementById('value');
  // Funcția de actualizare a interfeței
  const updateValue = () => {
    valueDisplay.textContent = counterValue;
  };

  // Handler pentru decrementare
  decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
  });

  // Handler pentru incrementare
  incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
  });
