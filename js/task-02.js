const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

ingredients.forEach(item => {
  const li = document.createElement('li');  

  li.style.listStyleType = 'none'
  li.textContent = item;    
   li.style.color = '#7b7b7b'
  li.classList.add('item');                 
  
  ul.appendChild(li);                       
});

