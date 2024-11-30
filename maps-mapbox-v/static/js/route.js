document.getElementById("directions-button").addEventListener("click", () => {
  getRoute();
  const directionsButton = document.getElementById("directions-button");
  // Hide the directions button if either input is cleared
  directionsButton.classList.remove("show");
  directionsButton.classList.add("hide");
});

function getRoute() {
  // Ensure both markers exist
  if (startMarker && endMarker) {
    const startCoordinates = startMarker.getLngLat().toArray();
    const endCoordinates = endMarker.getLngLat().toArray();

    // Fetch route details from the server
    fetch(
      `/directions?start=${startCoordinates.join(
        ","
      )}&end=${endCoordinates.join(",")}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0].geometry;
          addRouteToMap(route);
          fitRouteToBounds(route);

          // Get the steps from the route
          const steps = data.routes[0].legs[0].steps;
          updateInstructions(steps);

          // Perform animations only if the route is successfully loaded
          performRouteAnimation(startCoordinates, endCoordinates);
        }
      })
      .catch((error) => {
        console.error("Error fetching route:", error);
        // Optionally handle error UI updates here
      });
  }
}

// Function to perform route animations
function performRouteAnimation(startCoordinates, endCoordinates) {
  const midpoint = [
    (startCoordinates[0] + endCoordinates[0]) / 2,
    (startCoordinates[1] + endCoordinates[1]) / 2,
  ];

  setTimeout(() => {
    const zoom = map.getZoom() * 0.98;

    map.flyTo({
      center: midpoint,
      zoom: zoom,
      pitch: 60,
      bearing: 0,
      essential: true,
      speed: 1.2,
    });

    // Rotate the bearing 360 degrees
    setTimeout(() => {
      let bearing = 0;
      const rotationInterval = setInterval(() => {
        bearing += 10;
        if (bearing >= 360) {
          clearInterval(rotationInterval);

          // After rotation, fly back to the user's location
          setTimeout(() => {
            map.flyTo({
              center: startCoordinates,
              zoom: 17,
              pitch: 60,
              essential: true,
            });
          }, 1000);
        } else {
          map.rotateTo(bearing, { duration: 100 });
        }
      }, 100);
    }, 2000);
  }, 1000);
}

// Function to update the instructions in the sidebar
function updateInstructions(steps) {
  const instructionsList = document.getElementById("instructions-list");
  const instructionsContainer = document.getElementById("route-instructions");

  // Clear previous instructions
  instructionsList.innerHTML = "";

  if (steps && steps.length > 0) {
    instructionsContainer.style.display = "block";
    steps.forEach((step, index) => {
      const instructionItem = document.createElement("li");
      instructionItem.innerHTML = `<strong>Step ${index + 1}:</strong> ${
        step.maneuver.instruction
      }`;
      instructionsList.appendChild(instructionItem);
    });
  } else {
    // Hide the instructions container if no steps are available
    instructionsContainer.style.display = "none";
  }
}

function addRouteToMap(route) {
  // Check if all tiles have been loaded
  if (map.isStyleLoaded()) {
    // Ensure the map is idle and all tiles are rendered before adding the route layer
    map.once("idle", function () {
      if (map.getSource("route")) {
        // Update the existing route source with new data
        map.getSource("route").setData(route);
      } else {
        // Add a new route layer if it doesn't exist yet
        map.addLayer(
          {
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: route,
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                "#ff0000",
                "#3887be",
              ],
              "line-width": 7,
              "line-opacity": 1, // Ensure opacity is set explicitly
            },
          },
          "traffic-moderate"
        );
      }
    });
  } else {
    // Wait for the map to be idle (fully loaded)
    map.once("idle", function () {
      if (map.getSource("route")) {
        map.getSource("route").setData(route);
      } else {
        map.addLayer(
          {
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: route,
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                "#ff0000",
                "#3887be",
              ],
              "line-width": 7,
              "line-opacity": 1,
            },
          },
          "traffic-moderate"
        );
      }
    });
  }
}

function fitRouteToBounds(route) {
  const bounds = new mapboxgl.LngLatBounds();
  route.coordinates.forEach((coord) => {
    bounds.extend(coord);
  });
  map.fitBounds(bounds, {
    padding: { top: 50, bottom: 50, left: 350, right: 250 },
    pitch: 0,
  });
}

async function showDetails(startCoords, endCoords) {
  const query = `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;
  const response = await fetch(query);
  const data = await response.json();
  const route = data.routes[0];

  return {
    duration: route.duration, // in seconds
    distance: route.distance, // in meters
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const directionsButton = document.getElementById("directions-button");
  const popup = document.getElementById("start-driving-popup");
  const closePopup = document.getElementById("close-popup");
  const startDrivingButton = document.getElementById("start-driving-button");

  directionsButton.addEventListener("click", () => {
    popup.classList.remove("hidden"); // Show the popup
  });

  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden"); // Hide the popup
  });

  startDrivingButton.addEventListener("click", () => {
    popup.classList.add("hidden"); // Hide the popup when Start Driving is clicked
    console.log("Navigation started!"); // Optional: Replace with actual logic
  });

  // Optionally, close the popup on clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.add("hidden");
    }
  });
});
