//Here is some sample music data

const musicData = [
    {
        title: "Green Hill Zone",
        album: "Sonic the Hedgehog",
        src: "audio/02-Green Hill Zone.mp3",
        image: "pictures I need/green_hill_zone.jpg"
    },
    {
        title: "Chemical Plant Zone",
        album: "Sonic the Hedgehog 2",
        src: "audio/509127_Chemical-Plant-Zone.mp3",
        image: "Pictures I need/chemical_plant_zone.jpg"
    },
    {
        title: "City Escape",
        album: "Sonic Adventure 2 Battle",
        src: "audio/02.-Escape-From-The-City-.for-City-Escape.mp3",
        image: "Pictures I need/city_esacape.jpg"
    },
    {
        title: "Marble Zone",
        album: "Sonic the Hedgehog",
        src: "audio/03-Marble Zone.mp3",
        image: "Pictures I need/marble_zone.jpg"
    },
    {
        title: "Open Your Heart",
        album: "Sonic Adventure DX",
        src: "audio/06 Open Your Heart (MAIN THEME OF SONIC Adventure).mp3",
        image: "Pictures I need/sonic-adventure-dx.jpg"
    },
    {
        title: "Emerald Coast",
        album: "Sonic Adventure",
        src: "audio/1-05 Azure Blue World for Emerald Coast.mp3",
        image: "Pictures I need/emerald-coast.jpg"
    },
    {
        title: "Sonic Cd Opening Theme",
        album: "Sonic CD",
        src: "audio/us_opening_theme.mp3",
        image: "Pictures I need/sonic-cd.jpg"
    },
    {
        title: "Sonic CD (Short Song Version)",
        album: "Sonic CD",
        src: "audio/us_sonic_boom_(short_version).mp3",
        image: "Pictures I need/sonic-cd.jpg"
    },
    {
        title: "Sonic Heroes Theme",
        album: "Sonic Heroes",
        src: "audio/01 SONIC HEROES.mp3",
        image: "Pictures I need/sonic-heroes.jpg"
    },
];

//function to display the music collection

function displayMusic(){
    const musicCollection = document.getElementById("musicCollection");
    musicCollection.innerHTML = "";

    musicData.forEach(track =>{
        const trackDiv = document.createElement("div");
        trackDiv.className = "track";

        trackDiv.innerHTML = `<img src="${track.image}" alt="${track.title}">
            <h3>${track.title}</h3>
            <p>${track.album}</p>
            <audio controls>
                <source src="${track.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>`;

            musicCollection.appendChild(trackDiv);
    });
}

//This is for the search bar

document.getElementById("searchBar").addEventListener("input", function(){
    const searchTerm = this.value.toLowerCase();
    const filteredMusic = musicData.filter(track => 
        track.title.toLowerCase().includes(searchTerm) || 
        track.album.toLowerCase().includes(searchTerm)
    );

    const musicCollection = document.getElementById("musicCollection");
    musicCollection.innerHTML = '';

    filteredMusic.forEach(track =>{
        const trackDiv = document.createElement("div");
        trackDiv.className = 'track';

        trackDiv.innerHTML = `<img src="${track.image}" alt="${track.title}">
            <h3>${track.title}</h3>
            <p>${track.album}</p>
            <audio controls>
                <source src="${track.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;

        musicCollection.appendChild(trackDiv);
    });
});

//This is how to display all music

displayMusic();