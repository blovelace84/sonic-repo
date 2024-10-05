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
        const tracks = albums.querySelectorAll('li');
        tracks.forEach(track =>{
            if(track.textContent.toLowerCase().includes(searchInput)){
                track.style.display ='';
            }
            else{
                track.style.display = 'none';
            }
        });
    });
}