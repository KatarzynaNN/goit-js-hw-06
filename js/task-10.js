function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("#controls input");

function createBoxes(amount) {
	const pixels = 30;
	for (let i = 0; i < amount; i++) {
		const newDiv = document.createElement("div");
		newDiv.style.width = `${pixels + i * 10}px`;
		newDiv.style.height = `${pixels + i * 10}px`;
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
