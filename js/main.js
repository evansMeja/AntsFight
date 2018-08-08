$(document).ready(function(){
	
$("#uploadAnyFile").click(function(){
var fileName=$("#fileName").val();
var fileDescription=$("#fileDescription").val();
$.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {fileName: fileName,fileDescription:fileDescription},
    dataType: "json",
    success: function(response){
            if(response.status == "success"){
                alert("We received your submission, thank you!");
            }else{
                alert("An error occured.");
            }
}
}); 
});
	
$(".ajaxForm").submit(function(e){
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
        type: "POST",
        url: href,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        success: function(response){
            if(response.status == "success"){
                alert("We received your submission, thank you!");
            }else{
                alert("An error occured.");
            }
        }
    });
});
	
$("#demo").click(function(){
alert("I love programmig");
var email=$("#email").val();
var name=$("#name").val();
var comment=$("#comment").val();
var website=$("#website").val();
$.ajax({
    url: "https://formspree.io/evanslagat911@gmail.com",
    method: "POST",
    data: {email: email,name:name,comment:comment,website:website},
    dataType: "json",
    success: function(response){
            if(response.status == "success"){
                alert("We received your submission, thank you!");
            }else{
                alert("An error occured.");
            }
}
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


	$("#tabs").tab();
	
	
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




