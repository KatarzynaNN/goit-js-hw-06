const form = document.querySelector(".login-form");

function handleSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const email = form.elements.email.value;
	const password = form.elements.password.value;

	if (email === "" || password === "") {
		alert("Please fill in all the fields!");
	} else {
		let data = {
			email: email,
			password: password,
		};
		console.log(data);
		event.currentTarget.reset();
	}
}
form.addEventListener("submit", handleSubmit);
