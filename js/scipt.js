console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let playbtn = document.getElementById('playbtn');
let pausebtn = document.getElementById('pausebtn');
let forward = document.getElementById('forward');
let back = document.getElementById('back');
let audioElement = new Audio('songs/Radha Rani.mp3');

let songs = [
    {songsName: "Radha Rani", filePath: "songs/Radha Rani.mp3"},
    {songsName: "Gangster Paradise", filePath: "songs/Gangster Paradise.mp3"},
    {songsName: "Song1", filePath: "songs/Song1.mp3"}
]

// Handle play/pause click
playbtn.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playbtn.src = 'images/pause.png';
    }
    else if(audioElement.played || audioElement.currentTime<=0){
        audioElement.pause();
        playbtn.src = 'images/play.png';
    }
})

forward.addEventListener('click', ()=>{
    if(songIndex >= songs.length - 1){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    playbtn.src = 'images/pause.png';
})

back.addEventListener('click', ()=>{
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    else{
        songIndex -= 1;
    }
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    playbtn.src = 'images/pause.png';
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    SongBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = SongBar.value * audioElement.duration/100;
})

//Previous Next


// let songItems = Array.from(document.getElementsByClassName('songItem'));

// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

