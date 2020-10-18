var elMenu = document.querySelector(".siteheader__menu");
var elNavList = document.querySelector(".nav__list");
var elSocials = document.querySelector(".socials");

elMenu.addEventListener("click", function() {
	elMenu.classList.toggle("siteheader__menu--toggle");
	elNavList.classList.toggle("nav__list--toggle");
	elSocials.classList.toggle("socials--toggle");
});