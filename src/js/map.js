//карта магазинов на странице контакты
	function mapContactInit() {
    var styles = [{
	        "stylers": []
        },

        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#575757"
                }
            ]
	    },

        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#1B1B1B"
            }
        ]
	}];

    // Создаем объект стилей для карты, на базе наших стилей выше
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

        // описывавем опции, карты, там впринципе все понятно
        var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(52.440045, 31.007221),
        mapTypeControl:false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        scrollwheel: false,
        zoomControl: false,
        scaleControl:false,
        disableDefaultUI: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };

    //инициализациия карты
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var myCenter = new google.maps.LatLng(52.440045, 31.007221);
    var marker = new google.maps.Marker({position:myCenter});

    marker.setMap(map);


    $("#contact-map-place").change(function(){
        let thsLat = parseFloat($(this).find(':selected').attr('data-lat'));
        let thsLng = parseFloat($(this).find(':selected').attr('data-lng'));

        map.setCenter(new google.maps.LatLng(thsLat, thsLng));

        var myCenter = new google.maps.LatLng(thsLat, thsLng);

        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    });

}

jQuery(document).ready(function($){
    //Инициализируем карту магазинов
    mapContactInit();
});
