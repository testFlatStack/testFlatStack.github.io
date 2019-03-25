(function() {
    var geo = document.querySelector('.cityLogo');
    geo.addEventListener('click' ,function () {
        geo.style.opacity = '0.6';
        if (navigator.geolocation) {
            // Геолокация доступна
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    console.log('Latidude is:' + lat);
                    console.log('Longitude is: ' + lng);
                },
                function(error){
                    console.log('Error is: ' + error);
                }
            );
        }
        else {

            console.log('Геолокация не доступна');
        }

    });
})();

