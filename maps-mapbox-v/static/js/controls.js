let savedLayers = [];
let savedSources = [];

class PantoUserLocation{
    onAdd(map) {
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        this.button = document.createElement('button');
        this.button.className = 'mapboxgl-ctrl-icon';
        this.button.type = 'button';
        this.button.title = 'Adjust pitch';
        this.button.innerHTML = '📍';
        this.button.onclick = () => {
            panToLocation(userLocationMarker.getLngLat().toArray());
        };
        this.container.appendChild(this.button);
        return this.container;
    }

    onRemove() {
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }
}
// Add time of day buttons
function addTimeOfDayDropdown() {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'mapboxgl-ctrl mapboxgl-ctrl-group time-of-day-dropdown';

    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'mapboxgl-ctrl-icon dropdown-button';
    dropdownButton.type = 'button';
    dropdownButton.innerText = '🌞';
    dropdownButton.onclick = () => {
        closeDropdown('.map-style-dropdown .dropdown-menu'); // Close other dropdown
        dropdownMenu.classList.toggle('show');
    };

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';

    const dawnButton = createDropdownButton('dawn', '☀️', 'Dawn');
    dawnButton.onclick = () => {
        map.setConfigProperty('basemap', 'lightPreset', 'dawn');
        updateDropdownIcon('dawn');
        dropdownMenu.classList.remove('show');
    };

    const dayButton = createDropdownButton('day', '🌞', 'Day');
    dayButton.onclick = () => {
        map.setConfigProperty('basemap', 'lightPreset', 'day');
        updateDropdownIcon('day');
        dropdownMenu.classList.remove('show');
    };

    const duskButton = createDropdownButton('dusk', '🌅', 'Dusk');
    duskButton.onclick = () => {
        map.setConfigProperty('basemap', 'lightPreset', 'dusk');
        updateDropdownIcon('dusk');
        dropdownMenu.classList.remove('show');
    };

    const nightButton = createDropdownButton('night', '🌜', 'Night');
    nightButton.onclick = () => {
        map.setConfigProperty('basemap', 'lightPreset', 'night');
        updateDropdownIcon('night');
        dropdownMenu.classList.remove('show');
    };

    dropdownMenu.appendChild(dawnButton);
    dropdownMenu.appendChild(dayButton);
    dropdownMenu.appendChild(duskButton);
    dropdownMenu.appendChild(nightButton);

    dropdownContainer.appendChild(dropdownButton);
    dropdownContainer.appendChild(dropdownMenu);

    map.addControl({
        onAdd: () => {
            return dropdownContainer;
        },
        onRemove: () => {
            dropdownContainer.parentNode.removeChild(dropdownContainer);
        }
    }, 'top-right');
}



// Update dropdown icon
function updateDropdownIcon(timeOfDay) {
    const dropdownButton = document.querySelector('.dropdown-button');
    if (dropdownButton) {
        switch (timeOfDay) {
            case 'dawn':
                dropdownButton.innerText = '☀️';
                break;
            case 'day':
                dropdownButton.innerText = '🌞';
                break;
            case 'dusk':
                dropdownButton.innerText = '🌅';
                break;
            case 'night':
                dropdownButton.innerText = '🌜';
                break;
        }
    }
}

// Add map style buttons
function addMapStyleDropdown() {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'mapboxgl-ctrl mapboxgl-ctrl-group map-style-dropdown';

    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'mapboxgl-ctrl-icon dropdown-button';
    dropdownButton.type = 'button';
    dropdownButton.innerText = '🗺️';
    dropdownButton.onclick = () => {
        closeDropdown('.time-of-day-dropdown .dropdown-menu'); // Close other dropdown
        dropdownMenu.classList.toggle('show');
    };

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';

    const standardButton = createDropdownButton('standard', '🗺️', 'Standard');
standardButton.onclick = () => {
    saveMapLayers(); // Save the layers
    map.setStyle('mapbox://styles/mapbox/standard'); // Ensure this style URL is correct
    map.once('styledata', () => {
        setTimeout(() => {
            setTimeBasedMapStyleInitial();
            reapplyMapLayers(); // Reapply the saved layers
        }, 1000); // Small delay to ensure the style is fully loaded
    });
    dropdownMenu.classList.remove('show');
};

const satelliteButton = createDropdownButton('satellite', '🛰️', 'Satellite');
satelliteButton.onclick = () => {
    saveMapLayers(); // Save the layers
    map.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
    map.once('styledata', () => {
        setTimeout(() => {
            reapplyMapLayers(); // Reapply the saved layers
        }, 1000); // Small delay to ensure the style is fully loaded
    });
    dropdownMenu.classList.remove('show');
};



    dropdownMenu.appendChild(standardButton);
    dropdownMenu.appendChild(satelliteButton);

    dropdownContainer.appendChild(dropdownButton);
    dropdownContainer.appendChild(dropdownMenu);

    map.addControl({
        onAdd: () => {
            return dropdownContainer;
        },
        onRemove: () => {
            dropdownContainer.parentNode.removeChild(dropdownContainer);
        }
    }, 'top-right');
}

// Update dropdown icon for map style
function updateMapStyleDropdownIcon(style) {
    const dropdownButton = document.querySelector('.map-style-dropdown .dropdown-button');
    if (dropdownButton) {
        switch (style) {
            case 'standard':
                dropdownButton.innerText = '🗺️';
                break;
            case 'satellite':
                dropdownButton.innerText = '🛰️';
                break;
        }
    }
}

// Create dropdown button
function createDropdownButton(id, text, label) {
    const button = document.createElement('button');
    button.className = 'dropdown-item';
    button.type = 'button';
    button.id = id;
    button.innerText = text;
    button.title = label;
    return button;
}

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Function to close the dropdown
function closeDropdown(selector) {
    const dropdownMenu = document.querySelector(selector);
    if (dropdownMenu && dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    }
}

function saveMapLayers() {
    savedLayers = [];
    savedSources = [];
    const style = map.getStyle();

    style.layers.forEach(layer => {
        if (layer.id.startsWith('traffic-') || layer.id === 'route') {
            savedLayers.push(layer);
        }
    });

    Object.entries(style.sources).forEach(([id, source]) => {
        if (id === 'traffic' || id === 'route') {
            savedSources.push({ id, source });
        }
    });
}

function reapplyMapLayers() {
    savedSources.forEach(({ id, source }) => {
        map.addSource(id, source);
    });
    savedLayers.forEach(layer => {
        map.addLayer(layer);
    });
}
