$(document).ready(function(){
	
$("#demo").click(function(){
alert("cool");
$.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {message: "Hey this is evans!",email:"evanslagat911@gmail.com",hobby:"programming"},
    dataType: "json"
}); 
});
	
var name;
var email;
var website;
var comment;	
$("#v0").click(function(){
 setValues(1);
  $.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {name:"evans",comment:"good men",email:"I a have no email",website:"fine"},
    dataType: "json",
    success: function(result) {
       alert(result);
    }
}); 
}); 

$("#v1").click(function(){
 setValues(2);
  $.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {name:"evans",comment:"good men",email:"I a have no email",website:"fine"},
    dataType: "json",
    success: function(result) {
       alert(result);
    }
});
}); 
	
function getVal(el){
return document.getElementById(el).val;
}
	
function setValues(option){
switch(option){
	case 1:
	name = getVal("name1");
	message = getVal("comment1");
        email = getVal("email1");
	website = getVal("website1");
	break;
	case 2:
	name = getVal("name1");
	message = getVal("comment1");
        email = getVal("email1");
	website = getVal("website1");
		break;
	default:
		break;
}
}



	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




