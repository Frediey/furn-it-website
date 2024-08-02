"use strict";

// SELECTORS
const relative = document.querySelectorAll(".relative");
const navLink = document.querySelectorAll(".nav-link.nav-link-main");
const showMenu = document.querySelectorAll(".show-menu");
const viewMore = document.querySelector(".view-more-js");
const arrowVisibility = document.querySelector(".arrow-visibility");
const menuBtn = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav");
console.log(relative, navLink, showMenu);

// FUNCTIONS
const displayMenuMobile = function () {
	if (navBar.style.display === "none") {
		menuBtn.style.backgroundColor = "#946e10";
		menuBtn.style.color = "#fff";
		navBar.style.display = "block";
	} else {
		menuBtn.style.backgroundColor = "transparent";
		menuBtn.style.color = "#946e10";
		navBar.style.display = "none";
	}
};

menuBtn.addEventListener("click", displayMenuMobile);

const displayMenu = function (targ) {
	targ.querySelector(".show-menu").classList.remove("hidden");
	targ.classList.add("border-top");

	console.log(targ.parentElement);
};

const collapseMenu = function (targ) {
	targ.querySelector(".show-menu").classList.add("hidden");
	targ.classList.remove("border-top");
};

const showArrow = function () {
	arrowVisibility.classList.remove("hidden");
};

const hideArrow = function () {
	arrowVisibility.classList.add("hidden");
};

// NAVIGATION FUNCTIONALITY
for (let i = 0; i < relative.length; i++) {
	relative[i].addEventListener("mouseover", (event) => {
		displayMenu(relative[i]);
		// navLink[i].nextElementSibling.classList.remove("hidden");
	});

	relative[i].addEventListener("mouseout", (event) => {
		collapseMenu(relative[i]);
		// navLink[i].nextElementSibling.classList.add("hidden");
	});
}

// VIEW ARROW FUNCTIONALITY
viewMore.addEventListener("mouseover", function () {
	showArrow();
});

viewMore.addEventListener("mouseout", function () {
	hideArrow();
});

// alert("Subscribe for our daily feeds here");
