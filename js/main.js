$(document).ready(function(){
	
$("#v0").click(function(){
    	var name=getVal("name");
	var email=getVal("email");
	var comment=getVal("comment");
	var website=getVal("website");
  $.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {name: name,message:comment,email:email,website:website},
    dataType: "json"
}); 
alert("Message was sent successfully");
}); 

$("#v1").click(function(){
    	var name=getVal("name1");
	var email=getVal("email1");
	var comment=getVal("comment1");
	var website=getVal("website1");
  $.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {name: name,message: comment,email:email,website:website},
    dataType: "json"
}); 
alert("Message was sent successfully");
}); 
	
function getVal(el){
return document.getElementById(el).val;
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




