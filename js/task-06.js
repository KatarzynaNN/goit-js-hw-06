const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
	if (input.dataset.length === event.currentTarget.value.length) {
		input.classList = "valid";
	} else {
		input.classList = "invalid";
	}
});
