$(document).ready(function() {
  // header and footer trick]

  // data maps
  if ($("#map").length > 0) {
    var map = new Datamap({
      element: document.getElementById("map"),
      scope: "geo",
      fills: {
        HIGH: "#306596",
        MEDIUM: "#0fa0fa",
        LOW: "#bada55",
        EX: "red",
        defaultFill: "#dddddd"
      },
      data: {
        KK: { fillKey: "HIGH", totalTasks: 110 },
        SZ: { fillKey: "LOW", totalTasks: 150 },
        SD: { fillKey: "MEDIUM", totalTasks: 210 },
        MM: { fillKey: "LOW", totalTasks: 90 },
        KA: { fillKey: "HIGH", totalTasks: 110 },
        TB: { fillKey: "EX", totalTasks: 150 },
        IM: { fillKey: "LOW", totalTasks: 400 },
        SJ: { fillKey: "MEDIUM", totalTasks: 400 },
        AJ: { fillKey: "LOW", totalTasks: 400 },
        RK: { fillKey: "HIGH", totalTasks: 400 },
        AB: { fillKey: "MEDIUM", totalTasks: 400 },
        GU: { fillKey: "LOW", totalTasks: 400 }
      },
      setProjection: function(element) {
        var projection = d3.geo
          .equirectangular()
          .center([43, 42])
          .rotate([0, 0])
          .scale(4000)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        var path = d3.geo.path().projection(projection);

        return { path: path, projection: projection };
      },
      geographyConfig: {
        popupTemplate: function(geo, data) {
          return [
            '<div class="hoverinfo"><strong>',
            "" + geo.id, //.name,
            ": " + data.totalTasks,
            "</strong></div>"
          ].join("");
        }
      }
    });

    console.log(map);
  }

  // data tables
  $(".dt").DataTable();
  $("#dtBasicExample").DataTable();
  $(".dataTables_length").addClass("bs-select");

  //MAPS leaflet
  if ($("#mapid").length > 0) {
    //42.3154° N, 43.3569° E
    var map = L.map("mapid").setView([42.3154, 43.3569], 7, {
      fullscreenControl: true
    });
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW5nYWdlbmR5IiwiYSI6ImNqdTVndW1kZzA2MmE0ZW56c2VreGJkNXMifQ.XsD_u4SIWaIkUElRetL6YQ",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiZW5nYWdlbmR5IiwiYSI6ImNqdTVndW1kZzA2MmE0ZW56c2VreGJkNXMifQ.XsD_u4SIWaIkUElRetL6YQ"
      }
    ).addTo(map);

    map.addControl(new L.Control.Fullscreen());

    var markers = L.markerClusterGroup();
    var markerList = [];

    function populate() {
      for (var i = 0; i < locations.length; i++) {
        var a = locations[i];
        var title = a.company;

        var marker = L.marker([a.latitude, a.longitud], {
          title: title
        });

        marker.bindPopup(title);
        markers.addLayer(marker);
        markerList.push(marker);
      }
    }

    populate();

    map.addLayer(markers);
  }

  //MAPS leaflet for single inspector
  if ($("#map-inspector").length > 0) {
    //42.3154° N, 43.3569° E

    var map = L.map("map-inspector").setView([42.3154, 43.3569], 14, {
      fullscreenControl: true
    });
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW5nYWdlbmR5IiwiYSI6ImNqdTVndW1kZzA2MmE0ZW56c2VreGJkNXMifQ.XsD_u4SIWaIkUElRetL6YQ",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiZW5nYWdlbmR5IiwiYSI6ImNqdTVndW1kZzA2MmE0ZW56c2VreGJkNXMifQ.XsD_u4SIWaIkUElRetL6YQ"
      }
    ).addTo(map);

    map.addControl(new L.Control.Fullscreen());

    var marker = L.marker([42.3154, 43.3569], {
      title: "Pace Pace, current location"
    });
    console.log(marker);
    marker.bindPopup(marker.options.title).openPopup();

    map.addLayer(marker);
  }

  //MAPS leaflet
  if ($("#map-inspectors").length > 0) {
    //42.3154° N, 43.3569° E
    var map = L.map("map-inspectors").setView([42.3154, 43.3569], 9, {
      fullscreenControl: true
    });
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW5nYWdlbmR5IiwiYSI6ImNqdTVndW1kZzA2MmE0ZW56c2VreGJkNXMifQ.XsD_u4SIWaIkUElRetL6YQ",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiZW5nYWdlbmR5IiwiYSI6ImNqdTVndW1kZzA2MmE0ZW56c2VreGJkNXMifQ.XsD_u4SIWaIkUElRetL6YQ"
      }
    ).addTo(map);

    map.addControl(new L.Control.Fullscreen());

    //create icon
    var myIcon = L.icon({
      iconUrl: "/img/car-icon.png",
      iconSize: [32, 32]
      // iconAnchor: [32, 32],
      // popupAnchor: [-3, -76],
      // shadowUrl: "my-icon-shadow.png",
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });

    var markers = L.markerClusterGroup();
    var markerList = [];
    var markerListInspectors = [];

    function populateInspectors() {
      for (var i = 0; i < inspectors.length; i++) {
        var a = inspectors[i];
        var title = "Inspector: <h5>" + a.company + "</h5>";

        var marker = L.marker([a.latitude, a.longitud], {
          title: title,
          icon: myIcon
        });

        marker.bindPopup(title);
        markerListInspectors.push(marker);
        map.addLayer(marker);
      }
    }

    // var fx = new L.PosAnimation();
    // var mvm = L.marker([42.3154, 43.3569], {
    //   title: "hee",
    //   icon: myIcon
    // });
    // fx.run("<span>heeeee</span>", [300, 500], 0.5);

    function populate() {
      for (var i = 0; i < locations.length; i++) {
        var a = locations[i];
        var title = a.company;

        var marker = L.marker([a.latitude, a.longitud], {
          title: title
        });

        marker.bindPopup(title);
        markers.addLayer(marker);
        markerList.push(marker);
      }
    }

    populate();
    map.addLayer(markers);
    populateInspectors();
  }
});
