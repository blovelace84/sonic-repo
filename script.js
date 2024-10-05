function playTrack(trackId){
    const tracks = document.querySelectorAll('audio');
    tracks.forEach(track => track.pause());

    const selectedTrack = document.getElementById(trackId);
    selectedTrack.play();
}

function searchTracks(){
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const albums = document.querySelectorAll('.album');
    albums.forEach(album => {
        const tracks = album.querySelectorAll('li');
        let albumHasVisibleTracks = false;

        tracks.forEach(track => {
            if(track.textContent.toLowerCase().includes(searchInput)){
                track.style.display = '';
                albumHasVisibleTracks = true;
            }
            else{
                track.style.display = 'none';
            }
        });
        album.style.display = albumHasVisibleTracks ? '' : 'none';
    });
}

//Progress Bar
function updateProgressBar(audioId, progressBarId) {
    const audio = document.getElementById(audioId);
    const progressBar = document.getElementById(progressBarId);
    
    // Ensure the event is properly bound
    audio.ontimeupdate = () => {
        if (audio.duration) {
            const percentage = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = percentage + '%';
        }
    };
}

// Example for each track
updateProgressBar('green-hill', 'progress-bar-green-hill');
updateProgressBar('marble-zone', 'progress-bar-marble-zone');
updateProgressBar('open-heart', 'progress-bar-open-heart');
updateProgressBar('emerald-coast', 'progress-bar-emerald-coast');
updateProgressBar('sonic-boom', 'progress-bar-sonic-boom');
updateProgressBar('open-theme', 'progress-bar-open-theme');


//Add to Playlists

let playlist = [];

function addToPlaylist(trackId) {
    if (!playlist.includes(trackId)) {
        playlist.push(trackId);
        localStorage.setItem('playlist', JSON.stringify(playlist));
        alert('Track added to playlist!');
    }
}

function loadPlaylist() {
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    playlist = savedPlaylist;
    // Render the playlist
}