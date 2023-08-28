const allItems = document.querySelectorAll("li.item");
const numberOfItems = allItems.length;
console.log("Number of categories:", numberOfItems);

for (const item of allItems) {
	const h2 = item.querySelector("h2");
	console.log("Category:", h2.textContent);

	const allElements = item.querySelectorAll("li");
	const numberOfElements = allElements.length;
	console.log("Elements:", numberOfElements);
}
