const categories = document.querySelectorAll("li.item");
console.log(`В списке ${categories.length} категории.`);

const categoryName = document.querySelector("li.item");
console.log("Категория:", categoryName.firstElementChild.textContent);
console.log(
  "Количество элементов:",
  categoryName.lastElementChild.children.length
);
