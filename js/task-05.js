const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
	if (event.currentTarget.value === "") {
		nameOutput.textContent = "Anonymous";
	} else {
		nameOutput.textContent = event.currentTarget.value;
	}
});
