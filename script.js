
	function HideOnClick() {
  	var x = document.getElementById("navigation");  	
  	if (x.style.display === "none") {
    x.style.display = "block";	 
  	} else {
    x.style.display = "none";
  	}
	}
	
	
	
	
	function ResetMenu() {
  	var x = window.innerWidth
  	var y = document.getElementById("navigation");
  	if (x >  1050) {
    y.style.display = "block";
  	} 
	}

window.addEventListener('resize', ResetMenu);