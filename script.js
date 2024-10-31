
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

let playlistTracks = [
    { id: 1, title: "Spring Yard Zone", album: "Sonic the Hedgehog", game: "Sonic the Hedgehog" },
    { id: 2, title: "It Doesn't Matter (Sonic Theme)", album: "Sonic Adventure", game: "Sonic Adventure" }
    // Add more tracks as needed...
];

let playlists = {}; // Store playlists as an object, e.g., { playlistName: [trackIds] }
let currentPlaylistName = null; // Holds the name of the currently selected playlist for adding tracks

// Load saved playlists from localStorage on page load
window.onload = function() {
    loadPlaylists();
    displayLibrary();
    displayPlaylists();
};

function displayLibrary(){
    const trackLibrary = document.getElementById('track-library');
    trackLibrary.innerHTML = "";

    tracks.forEach(track => {
        const trackDiv = document.createElement("div");
        trackDiv.classList.add("track");
        trackDiv.innerHTML = `<p><strong>${track.title}</strong> - ${track.album}</p>
        <button> onclick="addToCurrentPlaylist(${track.id})">Add to Playlist</button>
        `;
        trackLibrary.appendChild(trackDiv);
    })
}

// Create a new playlist
function createPlaylist() {
    const playlistName = document.getElementById("playlist-name").value.trim();
    if (playlistName && !playlists[playlistName]) {
        playlists[playlistName] = [];
        currentPlaylistName = playlistName;
        savePlaylists();
        displayPlaylists();
        alert(`Playlist '${playlistName}' created!`);
    } else {
        alert("Enter a unique name for the playlist.");
    }
}

// Display all playlists in the #playlist-list
function displayPlaylists() {
    const playlistList = document.getElementById("playlist-list");
    playlistList.innerHTML = ""; // Clear current list

    for (const [playlistName, trackIds] of Object.entries(playlists)) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${playlistName} (${trackIds.length} tracks)</span>
            <button onclick="viewPlaylist('${playlistName}')">View</button>
            <button onclick="deletePlaylist('${playlistName}')">Delete</button>
        `;
        playlistList.appendChild(li);
    }
}

// View the tracks in a selected playlist
function viewPlaylist(playlistName) {
    currentPlaylistName = playlistName;
    const trackIds = playlists[playlistName];

    // Get full track details for each ID
    const trackTitles = trackIds.map(id => {
        const track = tracks.find(t => t.id === id);
        return track ? `${track.title} - ${track.album}` : null;
    }).filter(Boolean);

    alert(`Playlist: ${playlistName}\nTracks:\n${trackTitles.join("\n")}`);
}

// Add a track to the current playlist
function addToCurrentPlaylist(trackId) {
    if (!currentPlaylistName) {
        alert("Select or create a playlist first.");
        return;
    }

    // Ensure track isn't already in the playlist
    if (!playlists[currentPlaylistName].includes(trackId)) {
        playlists[currentPlaylistName].push(trackId);
        savePlaylists();
        alert(`Track added to "${currentPlaylistName}"`);
    } else {
        alert("Track already in the playlist.");
    }
}

// Save playlists to localStorage
function savePlaylists() {
    localStorage.setItem("playlists", JSON.stringify(playlists));
}

// Load playlists from localStorage
function loadPlaylists() {
    const savedPlaylists = JSON.parse(localStorage.getItem("playlists"));
    if (savedPlaylists) {
        playlists = savedPlaylists;
    }
}


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

