// Dark theme 
const themeSwitcher = document.querySelector("#theme-switcher");
const theme = document.querySelector(".theme");
const themeImage = document.querySelector(".light-input");
let mode = "light";

// Dark theme switcher light theme is default
function themeSwitch(){
	if (mode === "light"){
		mode = "dark";
		theme.setAttribute('class', 'dark');
	} else {
		mode = 'light';
		theme.setAttribute('class', 'light');
}}

// Dark theme icon switcher
function themeImages(event) {
	const theme = event.target;
	// if we click the input it will get the theme and change the image
	if (theme.matches('input')){
		// This will get the theme thats's active and change it
		const getTheme = theme.getAttribute('data-theme');
		if (getTheme === "light") {
			theme.dataset.theme = 'dark';
			theme.setAttribute('data-theme', 'dark');
			theme.setAttribute('value', theme.dataset.dark);
		} else {
			theme.dataset.theme = 'light';
			theme.setAttribute('value', theme.dataset.light);
		}
	}
}

themeSwitcher.addEventListener('click', themeSwitch);
themeImage.addEventListener('click', themeImages);