// Dark theme 
const themeSwitcher = document.querySelector("#theme-switcher");
const theme = document.querySelector(".theme");

let mode = "dark";

function themeSwitch(){
	console.log(mode);  
	if (mode === "dark"){
		mode = "light";
		theme.setAttribute('class', 'light');
	
	} else {
		mode = 'dark';
		theme.setAttribute('class', 'dark');
}}

themeSwitcher.addEventListener('click', themeSwitch);