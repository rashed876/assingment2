const searchSong = async() => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    const res = await fetch (url);
    const data = await res.json();
    disPlaySongs(data.data);

}
    const disPlaySongs = songs =>{
        const songContainer = document.getElementById('song-container');
        songContainer.innerHTML = '';

        songs.forEach(song =>{
            console.log(song)
            const songDiv = document.createElement('div');
            songDiv.className ='single-result row align-items-center my-3 p-3'
            songDiv.innerHTML = `
            <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                            <source src="${song.preview}" type="audio/mpeg">
                            
                        </audio>

                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
                </div
            `;
            songContainer.appendChild(songDiv);
        })
    }
    
    //somosa ase
    //  const getLyric = async (artist, title) => {
    //         const url = ` https://api.lyrics.ovh/v1/${artist}/${title}`
            
    //             const res = await fetch(url);
    //             const data = res.json();
    //         displayLyrics(data.lyrics);
    //         }
            


    const getLyric = (artist, title) => {
            const url = ` https://api.lyrics.ovh/v1/${artist}/${title}`
            fetch(url)
            .then(res => res.json())
            .then(data => displayLyrics(data.lyrics))
            .catch(error => displayError('something went wrong! please try aging later!! '));
        
    }


    const displayLyrics = lyrics => {
        const lyricsDiv = document.getElementById('song-lyric')
        lyricsDiv.innerText = lyrics;
    }

    const displayError = error =>{
        const errorTag = document.getElementById('error-message')
        errorTag.innerText = error;
    }

