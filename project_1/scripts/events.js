AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
 
        animatedMarker.addEventListener('click', function(ev, target){
                alert('Clicked!')
            }
        });
}});

