$(document).ready(function(){
	
$("#v0").click(function(){
  $.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {name: getVal("name"),message:getVal("comment"),email:getVal("email"),website:getVal("website")},
    dataType: "json",
    success: function(result) {
       alert(result);
    }
}); 
alert("Message was sent successfully");
}); 

$("#v1").click(function(){
  $.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {name: getVal("name1"),message:getVal("comment1"),email:getVal("email1"),website:getVal("website1")},
    dataType: "json",
    success: function(result) {
       alert(result);
    }
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




