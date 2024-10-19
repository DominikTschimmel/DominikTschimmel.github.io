    
function toggle_menu(){
   var menu_bar = document.getElementById("menu_bar");
   var logo = document.getElementById("logo");

   if (menu_bar.style.display != "block"){
      menu_bar.style.display = "block";
      logo.style.display = "block";

      var left = -300;
      var change = 28;

      function move_in(){
         if (left >= 0){
            clearInterval(interval)
         } else {
            change = Math.max(1,change -1);
            left = Math.min(left + change,0);
            menu_bar.style.left = left + "px";
            logo.style.left = left + "px";
         }
      }

      interval = setInterval(move_in,5);

   } else {
      var left = 0;
      var change = 0;

      function move_out(){
         if (left <= -300){
            menu_bar.style.display = "none";
            logo.style.display = "none";
            clearInterval(interval)
         } else {
            change = Math.min(28,change +1);
            left = Math.max(left - change,-300);
            menu_bar.style.left = left + "px";
            logo.style.left = left + "px";
         }
      }

      interval = setInterval(move_out,5);

   }
}	


window.onresize = resize_function;

function resize_function(){
   var menu_bar = document.getElementById("menu_bar");
   var logo = document.getElementById("logo");
   if (window.innerWidth > 900){
      menu_bar.style.display = "block";
      logo.style.display = "block";
      menu_bar.style.left = 0+"px";
      logo.style.left = 0+"px";
   } else {
      menu_bar.style.display = "none";
      logo.style.display = "none";
      menu_bar.style.left = -300+"px";
      logo.style.left = -300+"px";
   }
}


