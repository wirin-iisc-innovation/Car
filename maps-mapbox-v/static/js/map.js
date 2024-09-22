let map;
let userLocationMarker;
let startMarker=new mapboxgl.Marker();
let endMarker=new mapboxgl.Marker();
let startCoordinates;
let endCoordinates;
let routeDetails;

const bangaloreCoordinates = [77.5946, 12.9716];

function initializeMap(center = bangaloreCoordinates) {
    map = new mapboxgl.Map({
        container: 'map',
        center: center,
        zoom: 17,
        pitch: 60,
    });

    map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    map.on('load', () => {
        map.addSource('traffic', {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-traffic-v1'
        });

        if (map.getZoom() >= 14) {
            addTrafficLayers();
        }

        map.on('zoomend', () => {
            if (map.getZoom() >= 14) {
                addTrafficLayers();
            } else {
                removeTrafficLayers();
            }
        });
    });

    map.addControl(new PantoUserLocation(), 'top-right');

    watchUserLocation();
    addTimeOfDayDropdown();
    addMapStyleDropdown();

}

function watchUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(position => {
            const userLocation = [position.coords.longitude, position.coords.latitude];
            if (userLocationMarker) {
                userLocationMarker.setLngLat(userLocation);
            } else {
                const el = document.createElement('div');
                el.className = 'user-location-marker';
                userLocationMarker = new mapboxgl.Marker(el).setLngLat(userLocation).addTo(map);
            }
        }, error => {
            console.error("Error getting user location:", error);
            alert("Unable to retrieve your location. Please try again.");
        }, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function addTrafficLayers() {
    const congestionTypes = ['moderate', 'heavy', 'severe'];
    const colors = {
        'moderate': '#ffc107',
        'heavy': '#dc3545',
        'severe': '#8b0000'
    };

    congestionTypes.forEach(type => {
        if (!map.getLayer(`traffic-${type}`)) {
            map.addLayer({
                id: `traffic-${type}`,
                type: 'line',
                source: 'traffic',
                'source-layer': 'traffic',
                filter: ['==', ['get', 'congestion'], type],
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': ['case',
                        ['boolean', ['feature-state', 'hover'], false], '#ff0000',
                        colors[type]
                    ],
                    'line-width': 5,
                    'line-opacity': 1 // Ensure opacity is set explicitly
                }
            });
        }
    });
}



function removeTrafficLayers() {
    const congestionTypes = ['moderate', 'heavy', 'severe'];
    congestionTypes.forEach(type => {
        if (map.getLayer(`traffic-${type}`)) {
            map.removeLayer(`traffic-${type}`);
        }
    });
}

// Pan to location
function panToLocation(coordinates) {
    map.flyTo({
        center: coordinates,
        essential: true,
        zoom: 17
    });
}


function setTimeBasedMapStyleInitial() {
    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

    if (hours >= 5 && hours < 8) {
            map.setConfigProperty('basemap', 'lightPreset', 'dawn');
            updateDropdownIcon('dawn');
    } else if (hours >= 8 && hours < 17) {
            map.setConfigProperty('basemap', 'lightPreset', 'day');
            updateDropdownIcon('day');
    } else if (hours >= 17 && hours < 20) {
            map.setConfigProperty('basemap', 'lightPreset', 'dusk');
            updateDropdownIcon('dusk');
    } else {
            map.setConfigProperty('basemap', 'lightPreset', 'night');
            updateDropdownIcon('night');
    }
}

function updateTimeBasedMapStyle() {
    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());
    
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

    if (hours == 5 && minutes == 0) {
            map.setConfigProperty('basemap', 'lightPreset', 'dawn');
            updateDropdownIcon('dawn');
    } else if (hours == 8 && minutes == 0) {
            map.setConfigProperty('basemap', 'lightPreset', 'day');
            updateDropdownIcon('day');
    } else if (hours == 17 && minutes == 0) {
            map.setConfigProperty('basemap', 'lightPreset', 'dusk');
            updateDropdownIcon('dusk');
    } else if (hours == 20 && minutes == 0) {
            map.setConfigProperty('basemap', 'lightPreset', 'night');
            updateDropdownIcon('night');
    }
}

function startPeriodicTimeUpdates() {
    setInterval(updateTimeBasedMapStyle, 60000);
}
function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    setTimeout(setTimeBasedMapStyleInitial, 500);
    startPeriodicTimeUpdates();

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const map = document.getElementById('map');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open'); 
        sidebar.classList.add('open');
        map.style.left = '200px';
        map.style.right = '-200px';
    });

    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('open');
        document.getElementById('sidebar').classList.remove('open');
        map.style.left = '0';
        map.style.right = '0'; // Ensure Mapbox resizes correctly
    });
});
