
	function HideOnClick() {
  	var x = document.getElementById("navigation");  	
  	if (x.style.display === "none") {
    x.style.display = "block";	 
  	} else {
    x.style.display = "none";
  	}
	}
	
	function HideMenu() {
		var x = document.documentElement.clientWidth
		var y = document.getElementById("navigation");
		if (x <  1050) {
    	y.style.display = "none";
  		}  
		else {
		y.style.display = "block";
		}
		}


