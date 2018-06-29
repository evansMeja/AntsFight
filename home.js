$("#displayvid1").click(function(){
$("#vid1").css("visibility","visible");
});


$("#map").click(function(){
$("#vid1").css("visibility","visible");
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("vid1"),mapProp);
}
});
