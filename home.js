$("document").ready(function(){
$("#vid2").hide();
$("#vid1").show();
});


$("#displayvid1").click(function(){
$("#vid2").hide();
$("#vid1").show();
});
$("#displayvid2").click(function(){
$("#vid1").hide();
$("#vid2").show();
});


$("#map").click(function(){
$("#vid2").hide();
$("#vid1").hide();
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("vid1"),mapProp);
}
});
