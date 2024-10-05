const menuItemsByClass = document.querySelectorAll(".item");

console.log(`Number of categories: ${menuItemsByClass.length}`);

const elements = menuItemsByClass.forEach(li => {
    console.log(`Category: ${li.children[0].innerHTML} 
Elements: ${li.children[1].children.length}`)
});
 