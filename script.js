const show_time = 150;
const hide_time = 150;
const slide_up_time = 300;
const delay = 150;
var Content_id  = "#content_1";
var Title_id = "#title";
var Position = 0;

var Pages = ["content/Home.html", "content/About_Me.html", "content/Contact.html",  "content/Notes.html", "content/Other_Stuff.html" ];
var Titles = ["Welcome", "Short CV", "Contact", "Notes", "Other Stuff"];


function slide_out_left() {
		$(Content_id).animate({left: "-20vw", opacity : "0"}, hide_time);	
		$(Title_id).fadeOut(hide_time);
	}
	
	
function slide_out_right() {
		$(Content_id).animate({left: "+20vw", opacity : "0"}, hide_time);	
		$(Title_id).fadeOut(hide_time);
	}


function load_content(Content,Title) {
  		$(Content_id).load(Content,'f' + (Math.random()*1000000));
  		$(Title_id).html(Title);
}

function slide_in_left() {
		$(Content_id).animate({left: "-20vw", opacity : "0"}, 1);
		$(Content_id).animate({left: "0vw", opacity : "1"}, show_time);	
		$(Title_id).fadeIn(hide_time);
}


function slide_in_right() {
		$(Content_id).animate({left: "+20vw", opacity : "0"}, 1);
		$(Content_id).animate({left: "0vw", opacity : "1"}, show_time);	
		$(Title_id).fadeIn(hide_time);
}

function slide_up() {
		$(Title_id).fadeOut(1);
		$(Content_id).animate({ opacity : "0"}, 1);
		$(Content_id).animate({ top : "100vh"}, 1);
		$(Content_id).animate({top: "0vh", opacity: "1"},slide_up_time); 
		$(Title_id).fadeIn(slide_up_time);
}




function navigation(target_index, current_index) {
	dif = current_index - target_index;
	
	if (dif>0) {
		slide_out_right();
		setTimeout(function() {
				load_content(Pages[target_index],Titles[target_index]);
			slide_in_left();
		}, delay);
	}
	if (dif<0) {
		slide_out_left();
		setTimeout(function() {
			load_content(Pages[target_index],Titles[target_index]);
			slide_in_right();
		}, delay);
	}
	if (dif==0) {
		slide_up();
	}	
	
}





$(document).ready(function(){
	$(Title_id).fadeOut(1);
	$(Content_id).animate({ opacity : "0"}, 1);
	
	setTimeout(function() {
		load_content(Pages[0],Titles[0]);
		slide_up()
	}, delay);	
	

	
   
	Position = 0;

	$("#Home").click(function() {
		navigation(0,Position);
		Position = 0;
	});	
	
	$("#About").click(function() {
		navigation(1,Position);
		Position = 1;
	});		
	
	$("#Contact").click(function() {
		navigation(2,Position);
		Position = 2;
	});	

	$("#Notes").click(function() {
		navigation(3,Position);
		Position = 3;
	});	
	
	$("#Other_Stuff").click(function() {
		navigation(4,Position);
		Position = 4;
	});	





 
});




// touch controls



// load images in the cache 


    var img1 = new Image();
    img1.src = "images/About.jpg";
    img1.src = "images/Contact.jpg";
    img1.src = "images/Notes.jpg";
    img1.src = "images/Other_Stuff.jpg";
 





