const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap(lat, long) {
  const bangalore = { lat: 12.97, lng: 77.59 };
    bangalore.lat = +lat;
    bangalore.lng = +long;
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: bangalore,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}