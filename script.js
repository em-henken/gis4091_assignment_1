var map = L.map('map').setView([38.6393, -90.2945], 12);
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker1 = L.marker([38.6393, -90.2945]).addTo(map);
var marker2 = L.marker([38.630219, -90.211189]).addTo(map);
var marker3 = L.marker([38.649370, -90.257080]).addTo(map);
var marker4 = L.marker([38.610550, -90.202606]).addTo(map);
var marker5 = L.marker([38.635041,-90.237474]).addTo(map);


marker1.bindPopup("<b>Location 1</b><br>Saint Louis Art Museum").openPopup();
marker2.bindPopup("<b>Location 2</b><br>City Park").openPopup();
marker3.bindPopup("<b>Location 3</b><br>Bowood Farms").openPopup();
marker4.bindPopup("<b>Location 4</b><br>Protagonist Cafe").openPopup();
marker5.bindPopup("<b>Location 5</b><br>Humphrey's").openPopup();

