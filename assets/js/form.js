// Target submit .preventDefault()
const submitButton = document.querySelector("#submit");

// Save User, Title and Content Post in saved-entry
function saveLastPost() {
	const blogEntry = {	
		user: document.querySelector("#user-name").value,
		title: document.querySelector("#title-name").value,
		content: document.querySelector("#content-name").value,
	}
	localStorage.setItem('saved-entry', JSON.stringify(blogEntry));
}

// Validates if form is full and continues to blog.html
function validateForm() {
	const lastPost = JSON.parse(localStorage.getItem('saved-entry'));
	let user = lastPost.user;
	let title = lastPost.title;
	let content = lastPost.content;
	// Checks if information is full
	if (user !== "" && title !== "" & content !== "") { 
		document.getElementById("user-name").value = "";
		document.getElementById("title-name").value = "";
		document.getElementById("content-name").value = "";
		window.location.href = 'blog.html';
	} else {
		alert("Complete the form")
	}
}

submitButton.addEventListener('click', function(event) {
	
	event.preventDefault();
	saveLastPost();
	validateForm();
});