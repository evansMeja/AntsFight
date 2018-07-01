document.getElementById("map").addEventListener(click,function(){
alert("clicked me");
myMap();
});

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("map_disp"),mapProp);
}
