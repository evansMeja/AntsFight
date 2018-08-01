$(document).ready(function(){
	
$("#demo").click(function(){
alert("I love programmig");
var email=$("#email").val();
var name=$("#name").val();
var comment=$("#comment").val();
var website=$("#website").val();
$.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {email: email,name:name,comment:comment},
    dataType: "json"
}); 
});


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




