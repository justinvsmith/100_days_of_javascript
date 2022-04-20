const play = document.querySelector(".play"),
    previous = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    trackImage = document.querySelector(".track-image"),
    title = document.querySelector(".title"),
    artist = document.querySelector(".artist"),
    slider = document.querySelector(".duration-slider"),
    trackCurrentTime = document.querySelector(".current-time"),
    trackDuration = document.querySelector(".duration-time"),
    showVolume = document.querySelector("#show-volume"),
    volumeIcon = document.querySelector("#volume-icon"),
    currentVolume = document.querySelector("#volume"),
    autoPlayBtn = document.querySelector(".play-all"),
    hamburger = document.querySelector(".fa-bars"),
    closeIcon = document.querySelector(".fa-times"),
    musicPlaylist = document.querySelector(".music-playlist"),
    pDiv = document.querySelector(".playlist-div"),
    playlist = document.querySelector(".playlist");

    let timer;
    let autoplay = 0;
    let indexTrack = 0;
    let songIsPlaying = false;
    let track = document.createElement("audio");


// Event Listeners
play.addEventListener("click", justPlay);
next.addEventListener("click", nextSong);
previous.addEventListener("click", prevSong);
autoPlayBtn.addEventListener("click", autoPlayToggle);
volumeIcon.addEventListener("click", muteSound);
currentVolume.addEventListener("change", changeVolume);
slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
hamburger.addEventListener("click", showPlaylist);
closeIcon.addEventListener("click", hidePlaylist);


// Load Tracks
function loadTrack(indexTrack) {
    clearInterval(timer);
    resetSlider();
    track.src = trackList[indexTrack].path;
    trackImage.src = trackList[indexTrack].img;
    title.innerHTML = trackList[indexTrack].name;
    artist.innerHTML = trackList[indexTrack].singer;
    track.load(); 

    timer = setInterval(updateSlider, 1000);
};

loadTrack(indexTrack);

// Play or Pause Song
function justPlay() {
    if(songIsPlaying === false) {
        playSong();
    } else {
        pauseSong();
    }
}

// Play Song
function playSong() {
    track.play();
    songIsPlaying = true;
    play.innerHTML = "<i class='fas fa-pause'></i>";
}

// Pause Song 
function pauseSong() {
    track.pause();
    songIsPlaying = false;
    play.innerHTML = "<i class='fas fa-play'></i>";
}

// Next Song
function nextSong() {
    if(indexTrack < trackList.length - 1) {
        indexTrack++;
        loadTrack(indexTrack);
        playSong();
    } else {
        indexTrack = 0;
        loadTrack(indexTrack);
        playSong();
    }
}

// Previous  Song
function prevSong() {
    if(indexTrack > 0) {
        indexTrack--;
        loadTrack(indexTrack);
        playSong();
    } else {
        indexTrack = trackList.length - 1;
        loadTrack(indexTrack);
        playSong();
    }
}

// Mute Sound
function muteSound() {
    track.volume = 0;
    showVolume.innerHTML = 0;
    currentVolume.value = 0;
}

// Change Volume
function changeVolume() {
    showVolume.value = currentVolume.value;
    track.volume = currentVolume.value / 100;
}

// Change Duration
function changeDuration() {
    let sliderPosition = track.duration * (slider.value / 100);
    track.currentTime = sliderPosition;
}

// Auto Play
function autoPlayToggle() {
    if(autoplay == 0) {
        autoplay = 1;
        autoPlayBtn.style.background = "#db6400";
    } else {
        autoplay = 0;
        autoPlayBtn.style.background = "#ccc";
    }
}

// Reset Slider
function resetSlider() {
    slider.value = 0;
}

// Update Slider
function updateSlider() {
    let position = 0;

    if(!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    };

    if(track.ended) {
        play.innerHTML = "<i class='fas fa-play'></i>";
        if(autoplay == 1 && indexTrack < trackList.length - 1) {
            indexTrack++;
            loadTrack(indexTrack);
            playSong();
        } else if(autoplay == 1 && indexTrack == trackList.length - 1) {
            indexTrack = 0;
            loadTrack(indexTrack);
            playSong();
        }
    }
}

// Update Current Song Time
function songTimeUpdate() {
    if(track.duration) {

        let curMins = Math.floor(track.currentTime / 60);
        let curSecs = Math.floor(track.currentTime - curMins * 60);
        let durMins = Math.floor(track.duration / 60);
        let durSecs = Math.floor(track.duration - durMins * 60);
    
        if(durSecs < 10) {
            durSecs = "0" + durSecs;
        }
        
        if(durMins < 10) {
            durMins = "0" + durMins;
        }
    
        
        if(curSecs < 10) {
            curSecs = "0" + curSecs;
        }
        
        if(curMins < 10) {
            curMins = "0" + curMins;
        }

        trackCurrentTime.innerHTML = curMins + ":" + curSecs;
        trackDuration.innerHTML = durMins + ":" + durSecs;
    } else {
        trackCurrentTime.innerHTML = "00" + ":" + "00";
        trackDuration.innerHTML = "00" + ":" + "00";
    }


}

// Show Playlist
function showPlaylist() {
    musicPlaylist.style.transform = "translateX(0)";
}

// Hide Playlist
function hidePlaylist() {
    musicPlaylist.style.transform = "translateX(-100%)";
}

// Display Songs in Playlist
let counter = 1;
function displayTracks() {
    for(let i = 0; i < trackList.length; i++) {
        let div = document.createElement("div");
        div.classList.add("playlist");
        div.innerHTML = `
            <span class="song-index">${counter++}</span>
            <p class="single-song">${trackList[i].name}</p>
        `
        pDiv.appendChild(div);
    }

    playFromPlaylist();
}

displayTracks();

// Play song from the playlist
function playFromPlaylist() {
    pDiv.addEventListener("click", (e) => {
        if(e.target.classList.contains("single-song")) {
            const indexNum = trackList.findIndex((item, index) => {
                if(item.name === e.target.innerHTML) {
                    return true;
                }   
            });
            loadTrack(indexNum);
            playSong();
            hidePlaylist();
        }
    })
}