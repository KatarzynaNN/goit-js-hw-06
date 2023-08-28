const form = document.querySelector(".login-form");

function handleSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const email = form.elements.email.value;
	const password = form.elements.password.value;

	if (email === "" || password === "") {
		alert("Please fill in all the fields!");
	} else {
		const data = {
			email: email,
			password: password,
		};
		console.log(data);
		form.reset();
	}
}
form.addEventListener("submit", handleSubmit);
