function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("#controls input");
const initialSize = 30;
const increment = 10;

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		const newDiv = document.createElement("div");
		newDiv.style.width = `${initialSize + i * increment}px`;
		newDiv.style.height = `${initialSize + i * increment}px`;
		newDiv.style.backgroundColor = getRandomHexColor();
		divBoxes.append(newDiv);
	}
}
function destroyBoxes() {
	divBoxes.innerHTML = "";
}

createBtn.addEventListener("click", (event) => {
	destroyBoxes();
	let amount = numberInput.value;
	createBoxes(amount);
});

destroyBtn.addEventListener("click", (event) => {
	destroyBoxes();
});
