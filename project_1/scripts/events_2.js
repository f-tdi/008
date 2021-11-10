AFRAME.registerComponent('markerhandler', {
    
    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
                animatedMarker.addEventListener('click', () => {
                    alert('Clicked!')
 		    //window.location.assign("https://www.w3schools.com")
                });
        }});

    
