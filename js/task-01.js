const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категории.`);

/*const categoryName = [...allCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoryName);*/

allCategories.forEach(categories => console.log(`Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`));