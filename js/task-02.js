const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const list = document.querySelector("#ingredients");
const tableOfIngrdents = [];

for (const ingredient of ingredients) {
	const liIngredients = document.createElement("li");
	liIngredients.textContent = ingredient;
	liIngredients.classList.add("item");
	tableOfIngrdents.push(liIngredients);
}

list.append(...tableOfIngrdents);
