var map = null;
var wow = null;
var fnStart = function(){
  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true        // act on asynchronously loaded content (default is true)
          }
      );
  wow.init();

  map = L.map('map').setView([14.582352, -91.623541], 11);
  L.marker([14.582352,-91.623541]).addTo(map);
  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(map);

}


addEventListener('load',fnStart,false);
