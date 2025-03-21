
const music=new Audio('audio/1-song.mp3');

const song=[
    {
        id:'1',
        songName:`Sanam teri kasam <br>
         <div class="subtitle">Harshvardhan, Mawra</div>`,
        poster: "img/img-1.jpg",
        audio: "audio/1-song.mp3"
    }
    ,
    {
        id:'2',
        songName:`Chitthi <br>
            <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/img-2.jpg",
        audio: "audio/2-song.mp3"

    }
    ,
    {
        id:'3',
        songName:`Bandeya Rey Bandeya <br>
                   <div class="subtitle">Arijit Singh</div>`,
        poster: "img/img-3.jpg",
        audio: "audio/3-song.mp3"

    },
    {
        id:'4',
        songName:`Luka chupi <br>
                 <div class="subtitle">lata mangeshkar</div> `,
        poster: "img/img-4.jpg",
        audio: "audio/4-song.mp3"

    },
    {
        id:'5',
        songName:`Tujhko Na Dekhun <br>
                <div class="subtitle">Udit Narayan</div>`,
        poster: "img/img-5.jpg",
        audio: "audio/5-song.mp3"

    },
    {
        id:'6',
        songName:`Martin Garrix & Bebe Rexha<br>
                   <div class="subtitle">Alann worker</div>`,
        poster: "img/img-6.jpg",
        audio: "audio/6-song.mp3"

    },
    {
        id:'7',
        songName:`Tum Hi Ho" from Aashiqui<br>
                <div class="subtitle">Mariah Care</div>`,
        poster: "img/img-7.jpg",
        audio: "audio/7-song.mp3"

    },
    {
        id:'8',
        songName:`Khabar Nahi" from Dostana <br>
                   <div class="subtitle">Shakira Isabe</div>`,
        poster: "img/img-1.jpg",
        audio: "audio/8-song.mp3"

    },
    {
        id:'9',
        songName:`Sanam Teri kasam<br>
            <div class="subtitle">Harshvardhan, Mawra</div>`,
        poster: "img/img-9.jpg",
        audio: "audio/9-song.mp3"

    },
    {
        id:'10',
        songName:`Bandeya Rey Bandeya <br>
                <div class="subtitle">Arijit Singh</div>`,
        poster: "img/img-10.jpg",
        audio: "audio/10-song.mp3"

    },
    {
        id:'11',
        songName:`Chitthi<br>
                <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/img-11.jpg",
        audio: "audio/11-song.mp3"

    },
    {
        id:'12',
        songName:`Luka chupi<br>
                <div class="subtitle">lata mangeshkar</div>`,
        poster: "img/img-12.jpg",
        audio: "audio/12-song.mp3"

    },
    {
        id:'13',
        songName:`Tujhko Na Dekhun<br>
                <div class="subtitle">Udit Narayan</div>`,
        poster: "img/img-13.jpg",
        audio: "audio/13-song.mp3"

    },
    {
        id:'14',
        songName:`Martin Carrix & Babe ray<br>
                <div class="subtitle">Alann worker</div>`,
        poster: "img/img-14.jpg",
        audio: "audio/14-song.mp3"

    },
    {
        id:'15',
        songName:`Tum Hi Ho from Aashiqui<br>
                <div class="subtitle">Marish Care</div>`,
        poster: "img/img-15.jpg",
        audio: "audio/15-song.mp3"

    },
    {
        id:'16',
        songName:`Jo Hi Ho from <br>
                <div class="subtitle">King Care</div>`,
        poster: "img/img-16.jpg",
        audio: "audio/16-song.mp3"

    },
    {
        id:'17',
        songName:`Jis Din bhoola <br>
                <div class="subtitle">Garments Care</div>`,
        poster: "img/img-17.jpg",
        audio: "audio/17-song.mp3"

    },
    {
        id:'18',
        songName:`Ek bagal me chand<br>
                <div class="subtitle">Hindi Care</div>`,
        poster: "img/img-18.jpg",
        audio: "audio/18-song.mp3"

    },
    {
        id:'19',
        songName:`Layries Aashiqui<br>
                <div class="subtitle">Yak Marish </div>`,
        poster: "img/img-19.jpg",
        audio: "audio/19-song.mp3"

    },{
        id:'20',
        songName:`kis aur din bilam<br>
                <div class="subtitle">English Care</div `,
        poster: "img/img-20.jpg",
        audio:"audio/20-song.mp3"
        
    }
]

Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src=song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=song[i].songName;

})




let index = 0;  // Track current song index
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

// Play and pause functionality for master play button
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        // Update download link
        download_music.href = `audio/${index + 1}.mp3`;
        download_music.setAttribute('download', `song-${index + 1}.mp3`);
    } else {
        music.pause();
        wave.classList.remove('active');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// Play song from the playlist
Array.from(document.getElementsByClassName('playListplay')).forEach((e, i) => {
    e.addEventListener('click', (el) => {
        index = i;  // Update the index when a song is clicked
        let songObj = song[index];
        music.src = songObj.audio;
        poster_master_play.src = songObj.poster;
        title.innerHTML = songObj.songName;

        music.play();
        wave.classList.add('active');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        // Update UI for active song
        makeAllBackground();
        makeAllPlay();
        Array.from(document.getElementsByClassName('songitem'))[i].style.background = "rgb(105,105,105,.1)";
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
    });
});

// Reset all play icons in the playlist
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playListplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

// Reset all backgrounds for the songs in the playlist
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songitem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,0)';
    });
};

// Handle previous song (back) button
let back = document.getElementById('back');
back.addEventListener('click', () => {
    index = index === 0 ? song.length - 1 : index - 1;  // Go to previous song, or loop to the last song
    let songObj = song[index];
    music.src = songObj.audio;
    poster_master_play.src = songObj.poster;
    title.innerHTML = songObj.songName;

    music.play();
    wave.classList.add('active');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // Update UI for active song
    makeAllBackground();
    makeAllPlay();
    Array.from(document.getElementsByClassName('songitem'))[index].style.background = "rgb(105,105,105,.1)";
});

// Handle next song button
let next = document.getElementById('next');
next.addEventListener('click', () => {
    index = index === song.length - 1 ? 0 : index + 1;  // Go to next song, or loop to the first song
    let songObj = song[index];
    music.src = songObj.audio;
    poster_master_play.src = songObj.poster;
    title.innerHTML = songObj.songName;

    music.play();
    wave.classList.add('active');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    // Update UI for active song
    makeAllBackground();
    makeAllPlay();
    Array.from(document.getElementsByClassName('songitem'))[index].style.background = "rgb(105,105,105,.1)";
});

// Update progress bar as the song plays
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_durr = music.duration;

    let min1 = Math.floor(music_durr / 60);
    let sec1 = Math.floor(music_durr % 60);
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_durr) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// Volume control
let vol_ion = document.getElementById('vol_ion');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_ion.classList.remove('bi-volume-up-fill');
        vol_ion.classList.remove('bi-volume-down-fill');
        vol_ion.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_ion.classList.remove('bi-volume-up-fill');
        vol_ion.classList.add('bi-volume-down-fill');
        vol_ion.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_ion.classList.add('bi-volume-up-fill');
        vol_ion.classList.remove('bi-volume-down-fill');
        vol_ion.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

// Playlist scroll (Optional, for large lists)
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

// Toggle play/pause icon on the playlist
Array.from(document.getElementsByClassName('playListplay')).forEach((el, i) => {
    el.addEventListener('click', () => {
        const currentIcon = el.classList.contains('bi-pause-circle-fill');
        
        if (currentIcon) {
            el.classList.remove('bi-pause-circle-fill');
            el.classList.add('bi-play-circle-fill');  // Convert to play icon
        } else {
            el.classList.remove('bi-play-circle-fill');
            el.classList.add('bi-pause-circle-fill');  // Convert to pause icon
        }
    });
});


























// let shuffle=document.getElementsByClassName('shuffle')[0];
// shuffle.addEventListener('click',()=>{
//     let a=shuffle.innerHTML;
//     switch (a){
//         case "next":
//         shuffle.classList.add('bi-arrow-repeat');    
//         shuffle.classList.remove('bi-music-note-beamed');
//         shuffle.classList.remove('bi-shuffle');
//         shuffle.innerHTML='repeat';
//         break;

//         case "repeat":
//         shuffle.classList.remove('bi-arrow-repeat');    
//         shuffle.classList.remove('bi-music-note-beamed');
//         shuffle.classList.add('bi-shuffle');
//         shuffle.innerHTML='random';
//         break;
//         case "random":
//             shuffle.classList.remove('bi-arrow-repeat');    
//             shuffle.classList.add('bi-music-note-beamed');
//             shuffle.classList.remove('bi-shuffle');
//             shuffle.innerHTML='next';
//             break;

//     }
// });

// music.addEventListener('ended',()=>{

// })








