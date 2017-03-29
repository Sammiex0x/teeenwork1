// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});

var locations = [
   [
        "Teenwork @ CARSA Building",
        48.467922,
        -123.310904
       
    ],
    [
    	"Parking Lot 12",
        48.467394,
        -123.308372
 
    ],    
    [
        "Bike Parking",
        48.464948,
         -123.312175
         
    ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.465805, -123.310930),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
        map: map
      });

    var count = 0;

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
           if (locations[i][1]) {
            alert("Latitude,Longitude:  48.467922,-123.310904");
       
        } else if (locations[i][2]) {
            alert("Latitude,Longitude:  48.468146, -123.308372");
         
        } else {
            alert("Latitude,Longitude:  48.464948, -123.312175" )
          
        };
        }
      })(marker, i));
    }