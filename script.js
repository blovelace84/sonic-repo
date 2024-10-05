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