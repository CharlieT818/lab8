function initMap() {
	// add your code here
	L.mapquest.key = 'Sd0gQxwGnPEKQKLdsZBAUVjS0tzUGkAz';

// 'map' refers to a <div> element with the ID map
 var map = L.mapquest.map('map', {
  center: [32.8779254,-117.2359494],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});


 //Add a marker to the map
   L.marker([32.88, -117.236]).addTo(map);

}