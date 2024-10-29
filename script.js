const tracks = [
    {
        title: "Green Hill Zone",
        album: "Sonic the Hedgehog",
        cover: "Pictures I need/green_hill_zone.jpg",
        audio: "audio/02-Green Hill Zone.mp3"
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
        album: "Sonic Adventure 2 Battle",
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

// Select the container where track elements will be added
const container = document.getElementById("track-container");

// Loop through each track in the tracks array and create HTML elements
tracks.forEach(track => {
    // Create the main track div
    const trackDiv = document.createElement("div");
    trackDiv.classList.add("track");

    // Create and add the image element
    const img = document.createElement("img");
    img.src = track.cover;
    img.alt = `${track.title} Album Art`;
    img.classList.add("thumbnail");
    trackDiv.appendChild(img);

    // Create and add the title
    const title = document.createElement("h3");
    title.textContent = track.title;
    trackDiv.appendChild(title);

    // Create and add the album info
    const album = document.createElement("p");
    album.textContent = track.album;
    trackDiv.appendChild(album);

    // Create and add the audio player
    const audio = document.createElement("audio");
    audio.controls = true;
    const source = document.createElement("source");
    source.src = track.audio;
    source.type = "audio/mpeg";
    audio.appendChild(source);
    trackDiv.appendChild(audio);

    // Add the completed trackDiv to the container
    container.appendChild(trackDiv);
});
