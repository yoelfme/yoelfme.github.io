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

    this.goTo = function (element, to, duration){
      if (duration < 0) return;
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;
      setTimeout(function() {
          element.scrollTop = element.scrollTop + perTick;
          if (element.scrollTop === to) return;
          exports.goTo(element, to, duration - 10);
      }, 10);

      return false;
    };
}).call(exports,window,L);

addEventListener('load',exports.start,false);
