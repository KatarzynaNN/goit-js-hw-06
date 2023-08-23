const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
const value = document.querySelector("#value");

incrementBtn.addEventListener("click", (event) => {
	counterValue++;
	value.textContent = counterValue;
});

decrementBtn.addEventListener("click", (event) => {
	counterValue--;
	value.textContent = counterValue;
});
