//Initializing the variables
let songIndex = 0;
let playbtn = document.getElementById('playbtn');
let pausebtn = document.getElementById('pausebtn');
let forward = document.getElementById('forward');
let back = document.getElementById('back');
let GreetMsg = document.getElementById('GreetMsg');
var d = new Date();
var hrs = d.getHours();
let audioElement = new Audio('songs/Radha Rani.mp3');


let songs = [
    {songsName: "Radha Rani", songImage:"images/RadhaRaniRecent.png", filePath: "songs/Radha Rani.mp3"},
    {songsName: "Gangster P", songImage:"images/Gangster.png", filePath: "songs/Gangster Paradise.mp3"},
    {songsName: "Brothers A", songImage:"images/Brothers.png", filePath: "songs/Brothers Anthem.mp3"}
]

document.addEventListener('DOMContentLoaded',()=>{
    if (hrs>=12 && hrs<18) {
        GreetMsg.innerText = "Good Afternoon Girish !";
    }
    else if(hrs>=18 && hrs<0){
        GreetMsg.innerText = "Good Evening Girish !";
    }
    else{
        GreetMsg.innerText = "Good Morning Girish !";
    }
})
   
//Play/Pause click
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
    SongImage.src = songs[songIndex].songImage;
    SongText.innerText = songs[songIndex].songsName;
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
    SongImage.src = songs[songIndex].songImage;
    SongText.innerText = songs[songIndex].songsName;
})

// Events Listener
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    SongBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = SongBar.value * audioElement.duration/100;
}) 

