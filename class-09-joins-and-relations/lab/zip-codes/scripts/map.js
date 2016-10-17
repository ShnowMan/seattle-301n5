(function(mapMod) {

function initMap() {
  var map = {}
  // Create a map object and specify the DOM element for display.
  map.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.611435, lng: -122.330456},
    scrollwheel: true,
    zoom: 8
  });
  // if ($('input[name="zip"]')
  initMap.update = function(){
    webDB.execute([{
      'sql': 'SELECT city, latitude, longitude FROM zips WHERE zip = ?',
      'data' : [$('input[name="zip"]').val()]
    }],function(res){
      var usrLocation = res[0];
      map.map.setCenter({ lat: usrLocation.latitude, lng: usrLocation.longitude})
    })
  }

//I need to make a function similar to the one above, that updates the location of the map to the state and city of the drop down filter. I may skip this step, and just make the makers do that.

  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.

}
// function initMarker()
// var marker = new google.maps.Marker({
// map: map,
// position: location,
// label:label,
  mapMod.initMap = initMap;
})(window)
