var exports = {};
(function (window,L){
    var map = null;

    this.start = function (){
        map = window.L.map('map').setView([14.582352, -91.623541], 11);
        L.marker([14.582352,-91.623541]).addTo(map);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
              '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
              'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'examples.map-i875mjb7'
          }).addTo(map);
        //document.getElementById('contact').click();
    };

    this.goTo = function (element, to, duration,last_difference){
      if (duration < 0) return;

      last_difference = typeof last_difference !== 'undefined' ? last_difference : -1;

      to = document.getElementById(to);
      var difference = to.offsetTop - element.scrollTop;
      var perTick = difference / duration * 10;
      
      if (last_difference === difference ) return;

      setTimeout(function() {
          element.scrollTop = element.scrollTop + perTick;
          if (element.scrollTop === to.offsetTop) return;
          exports.goTo(element, to.id, duration - 10,difference);
      }, 10);

      return false;
    };
}).call(exports,window,L);

addEventListener('load',exports.start,false);
