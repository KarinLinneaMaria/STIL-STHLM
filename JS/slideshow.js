$(document).ready(function(){
    

var header = $('body');

var backgrounds = new Array(
    'url(Pics/test1.jpg) no-repeat center center fixed'
  , 'url(Pics/11.jpg)no-repeat center center fixed'
  , 'url(Pics/17.jpg)no-repeat center center fixed'  
, 'url(Pics/test4.jpg)no-repeat center center fixed'      

);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background', backgrounds[current]);
    
    
   header.css('background-size', 'cover');
    
    
}
setInterval(nextBackground, 5000);

header.css('background', backgrounds[0]);
    
    
}); 


