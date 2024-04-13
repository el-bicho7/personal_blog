// Target submit .preventDefault()
const submitButton = document.querySelector("#submit");

function openWin(event) {
	event.preventDefault();
	window.location.href = 'blog.html'
}

submitButton.addEventListener('click', openWin);