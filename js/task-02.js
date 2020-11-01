const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsArray = ingredients.map((ingredient) => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  return ingredientRef;
})
const show = document.querySelector('#ingredients').append(...ingredientsArray);
