$("document").ready(function(){
$("#vid2").hide();
$("#vid1").show();
$("#map_disp").hide();
});


$("#displayvid1").click(function(){
$("#vid2").hide();
$("#vid1").show();
$("#map_disp").hide();
});
$("#displayvid2").click(function(){
$("#vid1").hide();
$("#vid2").show();
$("#map_disp").hide();
});


$("#map").click(function(){
$("#vid2").hide();
$("#vid1").hide();
$("#map_disp").show();
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("map_disp"),mapProp);
});
