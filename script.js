const tracks = [
    {
        title: "Green Hill Zone",
        album: "Sonic the Hedgehog",
        cover: "Pictures I need/green_hill_zone.jpg",
        audio: "audio/02-Green Hill Zone.mp3"
    },
    {
        title: "Marble Zone",
        album: "Sonic the Hedgehog",
        cover: "Pictures I need/marble_zone.jpg",
        audio: "audio/03-Marble Zone.mp3"
    },
    {
        title: "Boss",
        album: "Sonic the Hedgehog",
        cover: "Pictures I need/dr eggman.jpg",
        audio: "audio/08-Boss.mp3"
    },
    {
        title: "Chemical Plant Zone",
        album: "Sonic the Hedgehog 2",
        cover: "Pictures I need/chemical_plant_zone.jpg",
        audio: "audio/509127_Chemical-Plant-Zone.mp3"
    },
    {
        title: "Marble Zone",
        album: "Sonic the Hedgehog 2",
        cover: "Pictures I need/marble_zone.jpg",
        audio: "audio/03-Marble Zone.mp3"
    },
    {
        title: "Open Your Heart",
        album: "Sonic Adventure",
        cover: "Pictures I need/sonic-adventure-dx.jpg",
        audio: "audio/06 Open Your Heart (MAIN THEME OF SONIC Adventure).mp3"
    },
    {
        title: "Escape From the City",
        album: "Sonic Adventure 2",
        cover: "Pictures I need/city_esacape.jpg",
        audio: "audio/02.-Escape-From-The-City-.for-City-Escape.mp3"
    },
    {
        title: "Emerald Coast",
        album: "Sonic Adventure",
        cover: "Pictures I need/emerald-coast.jpg",
        audio: "audio/1-05 Azure Blue World for Emerald Coast.mp3"
    },
    {
        title: "Sonic CD Opening Theme",
        album: "Sonic CD",
        cover: "Pictures I need/sonic-cd.jpg",
        audio: "audio/us_opening_theme.mp3"
    },
    {
        title: "Sonic Boom",
        album: "Sonic CD",
        cover: "Pictures I need/sonic-cd.jpg",
        audio: "audio/us_sonic_boom_(short_version).mp3"
    },
    {
        title: "Sonic Heroes",
        album: "Sonic Heroes",
        cover: "Pictures I need/sonic-heroes.jpg",
        audio: "audio/01 SONIC HEROES.mp3"
    }
];

// Function to display tracks
function displayTracks(tracksToDisplay) {
    const container = document.getElementById("track-container");
    container.innerHTML = ""; // Clear previous tracks

    tracksToDisplay.forEach(track => {
        const trackDiv = document.createElement("div");
        trackDiv.classList.add("track");

        const img = document.createElement("img");
        img.src = track.cover;
        img.alt = `${track.title} Album Art`;
        img.classList.add("thumbnail");
        trackDiv.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = track.title;
        trackDiv.appendChild(title);

        const album = document.createElement("p");
        album.textContent = track.album;
        trackDiv.appendChild(album);

        const audio = document.createElement("audio");
        audio.controls = true;
        const source = document.createElement("source");
        source.src = track.audio;
        source.type = "audio/mpeg";
        audio.appendChild(source);
        trackDiv.appendChild(audio);

        container.appendChild(trackDiv);
    });
}

// Display all tracks initially
displayTracks(tracks);

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", function () {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredTracks = tracks.filter(track =>
        track.title.toLowerCase().includes(searchTerm) ||
        track.album.toLowerCase().includes(searchTerm) ||
        (track.composer && track.composer.toLowerCase().includes(searchTerm))
    );
    displayTracks(filteredTracks);
});



// Filter functionality
document.getElementById("category-filter").addEventListener("change", function () {
    const selectedCategory = this.value;
    const filteredTracks = selectedCategory
        ? tracks.filter(track => track.album === selectedCategory)
        : tracks;
    displayTracks(filteredTracks);
});

// Sort functionality
document.getElementById("sort-options").addEventListener("change", function () {
    const sortOption = this.value;
    let sortedTracks = [...tracks]; // Create a copy to avoid mutating the original array

    if (sortOption === "alphabetical") {
        sortedTracks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "releaseDate") {
        sortedTracks.sort((a, b) => a.releaseDate - b.releaseDate);
    } else if (sortOption === "popularity") {
        sortedTracks.sort((a, b) => b.popularity - a.popularity);
    }

    displayTracks(sortedTracks);
});


//how to add an event listener for the search button

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", function () {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const filteredTracks = tracks.filter(track =>
        track.title.toLowerCase().includes(searchTerm) ||
        track.album.toLowerCase().includes(searchTerm) ||
        (track.composer && track.composer.toLowerCase().includes(searchTerm))
    );
    displayTracks(filteredTracks);
});

