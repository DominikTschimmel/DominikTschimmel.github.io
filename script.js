	var img = document.querySelector("image");
	document.body.classList.add('js-loading');

	img.addEventListener("load", showPage);

	unction showPage() {
  	document.body.classList.remove('js-loading');	}
  	