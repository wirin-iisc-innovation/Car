async function getSuggestions(query) {
    const proximity = [77.5946, 12.9716]; // Proximity to Bangalore
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?proximity=${proximity}&access_token=${mapboxgl.accessToken}`);
    const data = await response.json();
    return data.features; // Return the features array
}

async function getRecentLocations() {
    const response = await fetch('/recent-locations');
    const data = await response.json();
    return data;
}

async function saveLocation(location) {
    try {
        const response = await fetch('/save-location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(location)
        });

        if (!response.ok) {
            throw new Error('Failed to save location');
        }

        const result = await response.json();
        if (result.status !== 'success') {
            throw new Error('Save location was not successful');
        }

        console.log('Location saved successfully:', location.place_name);
    } catch (error) {
        console.error('Error saving location:', error);
    }
}


// Event listener for the search box
document.getElementById('starting-input').addEventListener('focus', async (event) => {
    const query = event.target.value.trim();
    if (!query) {
        const recentLocations = await getRecentLocations();
        displayRecentLocations(recentLocations, 'starting');
    } else {
        const suggestions = await getSuggestions(query);
        displaySuggestions(suggestions, 'starting');
    }
});

document.getElementById('starting-input').addEventListener('input', async (event) => {
    const query = event.target.value.trim();
    if (!query) {
        const recentLocations = await getRecentLocations();
        displayRecentLocations(recentLocations, 'starting');
    } else {
        const suggestions = await getSuggestions(query);
        displaySuggestions(suggestions, 'starting');
    }
});

document.getElementById('ending-input').addEventListener('focus', async (event) => {
    const query = event.target.value.trim();
    if (!query) {
        const recentLocations = await getRecentLocations();
        displayRecentLocations(recentLocations, 'ending');
    } else {
        const suggestions = await getSuggestions(query);
        displaySuggestions(suggestions, 'ending');
    }
});

document.getElementById('ending-input').addEventListener('input', async (event) => {
    const query = event.target.value.trim();
    if (!query) {
        const recentLocations = await getRecentLocations();
        displayRecentLocations(recentLocations, 'ending');
    } else {
        const suggestions = await getSuggestions(query);
        displaySuggestions(suggestions, 'ending');
    }    
});

// Event listener for the clear button on the starting location
document.getElementById('starting-clear-button').addEventListener('click', () => {
    document.getElementById('starting-input').value = '';
    startMarker.remove(); // Remove the start marker from the map
    clearSuggestions();

    const directionsButton = document.getElementById('directions-button');
    // Hide the directions button if either input is cleared
    directionsButton.classList.remove('show');
    directionsButton.classList.add('hide');

    
    const routeInstructions = document.getElementById('route-instructions');
    routeInstructions.style.display = 'none';
});

// Event listener for the clear button on the ending location
document.getElementById('ending-clear-button').addEventListener('click', () => {
    document.getElementById('ending-input').value = '';
    endMarker.remove(); // Remove the end marker from the map
    clearSuggestions();

    const directionsButton = document.getElementById('directions-button');
    // Hide the directions button if either input is cleared
    directionsButton.classList.remove('show');
    directionsButton.classList.add('hide');

    const routeInstructions = document.getElementById('route-instructions');
    routeInstructions.style.display = 'none';
});


function displayRecentLocations(locations, type) {
    const suggestionsBox = document.getElementById('common-suggestions');
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'block';

    // Use Current Location suggestion
    const currentLocationDiv = document.createElement('div');
    currentLocationDiv.className = 'suggestion';

    const locationIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M20 12h2"></path>
        <path d="M2 12h2"></path>
        <path d="M19.07 4.93l-1.41 1.41"></path>
        <path d="M4.93 19.07l-1.41-1.41"></path>
        <path d="M19.07 19.07l-1.41-1.41"></path>
        <path d="M4.93 4.93l-1.41 1.41"></path>
    </svg>`;

    currentLocationDiv.innerHTML = `${locationIconSVG} Use Current Location`;

    currentLocationDiv.addEventListener('click', () => {
        if (userLocationMarker) {
            const coords = userLocationMarker.getLngLat();
            if (type === 'starting') {
                startMarker.setLngLat(coords).addTo(map);
                document.getElementById('starting-input').value = 'Current Location';
            } else {
                endMarker.setLngLat(coords).addTo(map);
                document.getElementById('ending-input').value = 'Current Location';
            }
            map.flyTo({ center: coords, zoom: 17 });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        clearSuggestions();
    });

    suggestionsBox.appendChild(currentLocationDiv);

    // Clock icon for recent locations
    const clockIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>`;

    // History suggestions
    locations.forEach((location) => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'suggestion';
        suggestionDiv.style.display = 'flex'; // Flexbox layout
        suggestionDiv.style.alignItems = 'center'; // Vertically align items
        
        // Clock icon and text side by side
        suggestionDiv.innerHTML = `
            <div style="margin-right: 8px;">${clockIconSVG}</div>
            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${location.place_name}</div>
        `;

        suggestionDiv.addEventListener('click', () => {
            selectSuggestion(location, type);
        });

        suggestionsBox.appendChild(suggestionDiv);
    });
}



function displaySuggestions(suggestions, type) {
    const suggestionsBox = document.getElementById('common-suggestions');
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'block';
    
    const currentLocationDiv = document.createElement('div');
    currentLocationDiv.className = 'suggestion';

    const locationIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 8px;">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M20 12h2"></path>
    <path d="M2 12h2"></path>
    <path d="M19.07 4.93l-1.41 1.41"></path>
    <path d="M4.93 19.07l-1.41-1.41"></path>
    <path d="M19.07 19.07l-1.41-1.41"></path>
    <path d="M4.93 4.93l-1.41 1.41"></path>
    </svg>`;

    currentLocationDiv.innerHTML = `${locationIconSVG} Use Current Location`;

    currentLocationDiv.addEventListener('click', () => {
        if (userLocationMarker) {
            const coords = userLocationMarker.getLngLat();
            if (type === 'starting') {
                startMarker.setLngLat(coords).addTo(map);
                document.getElementById('starting-input').value = 'Current Location';
            } else {
                endMarker.setLngLat(coords).addTo(map);
                document.getElementById('ending-input').value = 'Current Location';
            }
            map.flyTo({ center: coords, zoom: 17 });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        clearSuggestions();
    });

    suggestionsBox.appendChild(currentLocationDiv);

    suggestions.forEach((suggestion) => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'suggestion';
        suggestionDiv.textContent = suggestion.place_name;
        suggestionDiv.addEventListener('click', () => {
            selectSuggestion(suggestion, type);
            saveLocation(suggestion);
        });
        suggestionsBox.appendChild(suggestionDiv);
    });
}

function clearSuggestions() {
    const suggestionsBox = document.getElementById('common-suggestions');
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';
}

async function selectSuggestion(suggestion, type) {
    const coords = suggestion.geometry.coordinates;
    if (type === 'starting') {
        startMarker.setLngLat(coords).addTo(map);
        document.getElementById('starting-input').value = suggestion.place_name;
    } else {
        endMarker.setLngLat(coords).addTo(map);
        document.getElementById('ending-input').value = suggestion.place_name;
    }
    map.flyTo({ center: coords, zoom: 17 });
    clearSuggestions();

    const directionsButton = document.getElementById('directions-button');

    saveLocation(suggestion).catch(error => console.error('Error saving location:', error));
    if (startMarker.getLngLat() && endMarker.getLngLat()) {
        
        const startCoords = startMarker.getLngLat();
        const endCoords = endMarker.getLngLat();
        directionsButton.classList.add('show');

        // Get route details
        try {
            // Get route details (assuming `showDetails` returns the route information)
            const routeOverview = await showDetails([startCoords.lng, startCoords.lat], [endCoords.lng, endCoords.lat]);

            // Convert duration to minutes and distance to kilometers
            const durationInMinutes = Math.round(routeOverview.duration / 60); // convert seconds to minutes
            const distanceInKm = (routeOverview.distance / 1000).toFixed(1); // convert meters to kilometers

            // Log the details to the console
            console.log(`Duration: ${durationInMinutes} minutes`);
            console.log(`Distance: ${distanceInKm} km`);
        } catch (error) {
            console.error('Error fetching route details:', error);
        }

    }


}

document.addEventListener('click', (event) => {
    const startingInput = document.getElementById('starting-input');
    const endingInput = document.getElementById('ending-input');
    const commonSuggestions = document.getElementById('common-suggestions');
    
    // If the click happens outside the inputs or suggestions box, remove focus
    if (!startingInput.contains(event.target) && !endingInput.contains(event.target) && !commonSuggestions.contains(event.target)) {
        startingInput.blur();
        endingInput.blur();
    }
});

async function showDetails(startCoords, endCoords) {
    const query = `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;
    const response = await fetch(query);
    routeDetails = await response.json();
    const route = routeDetails.routes[0];
    
    return {
        duration: route.duration, // in seconds
        distance: route.distance  // in meters
    };
}
