var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 2000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.querySelectorAll(".slide");
	objs.forEach(obj => {
		obj.style.width = slidewidth;
	});
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var bolinhas = document.querySelectorAll('.bolinha');
	bolinhas[slideItem].classList.remove('bolinha-ativa');
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	bolinhas[slideItem].classList.add('bolinha-ativa');
}
function mudarSlide(pos) {
	var bolinhas = document.querySelectorAll('.bolinha');
	bolinhas[slideItem].classList.remove('bolinha-ativa');
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	bolinhas[slideItem].classList.add('bolinha-ativa');
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}
