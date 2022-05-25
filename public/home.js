const music = new Audio("vande.mp3");
// music.play();

const songs = [
  {
    id: '1',
    songName: `Perfect<br>
    <div class="subtitle">Ed Sheeran</div>`,
    poster: "img/1.jpg"

  },
  {
    id: '2',
    songName: `Ude Dil Befikre<br>
    <div class="subtitle">Benny Dayal</div>`,
    poster: "img/2.jpg"

  },
  {
    id: '3',
    songName: `Tu Jaane Na<br>
    <div class="subtitle">Atif Aslam</div>`,
    poster: "img/3.jpg"

  },
  {
    id: '4',
    songName: `Doing It Wrong<br>
    <div class="subtitle">Drake</div>`,
    poster: "img/4.jpg"

  },
  {
    id: '5',
    songName: `Banjaara<br>
    <div class="subtitle">Mohammed Irfan</div>`,
    poster: "img/5.jpg"

  },
  {
    id: '6',
    songName: `Thehar Ja<br>
    <div class="subtitle">Armaan Malik</div>`,
    poster: "img/6.jpg"

  },
  {
    id: '7',
    songName: `Dil Chahta Hai<br>
    <div class="subtitle">Shankar Mahadevan</div>`,
    poster: "img/7.jpg"

  },
  {
    id: '8',
    songName: `No Lie<br>
    <div class="subtitle">Sean Paul</div>`,
    poster: "img/8.jpg"

  },
  {
    id: '9',
    songName: `Such a Whore<br>
    <div class="subtitle">JVLA</div>`,
    poster: "img/9.jpg"

  },
  {
    id: '10',
    songName: `Toxic<br>
    <div class="subtitle">Britney Spears</div>`,
    poster: "img/10.jpg"

  },
  {
    id: '11',
    songName: `Tide is High<br>
    <div class="subtitle">Atomic Kitten</div>`,
    poster: "img/11.jpg"

  },
  {
    id: '12',
    songName: ` Dil Dhadakne Do<br>
    <div class="subtitle">Priyanka Chopra</div>`,
    poster: "img/12.jpg"

  },
  {
    id: '13',
    songName: `Bhula Dena<br>
    <div class="subtitle">Mustafa Zahid</div>`,
    poster: "img/13.jpg"

  },
  {
    id: '14',
    songName: `Unstoppable<br>
    <div class="subtitle">Sia</div>`,
    poster: "img/14.jpg"

  },
  {
    id: '15',
    songName: `Good as Hell<br>
    <div class="subtitle">Lizzo</div>`,
    poster: "img/15.jpg"

  },
  {
    id: '16',
    songName: `22<br>
    <div class="subtitle">Taylor Swift</div>`,
    poster: "img/16.jpg"

  },
  {
    id: '17',
    songName: `Mann Mera<br>
    <div class="subtitle">Gajendra Verma</div>`,
    poster: "img/17.jpg"

  },
  {
    id: '18',
    songName: `Lovely<br>
    <div class="subtitle">Billie Eillish and Khalid</div>`,
    poster: "img/18.jpg"

  },
  {
    id: '19',
    songName: `Memories<br>
    <div class="subtitle">Maroon 5</div>`,
    poster: "img/19.jpg"

  },
  {
    id: '20',
    songName: `Vaaste<br>
    <div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "img/20.jpg"

  },
  {
    id: '21',
    songName: `Shayad`,
    poster: "img/21.jpg"

  },
  {
    id: '22',
    songName: `Kabira`,
    poster: "img/22.jpg"

  },
  {
    id: '23',
    songName: `Srivalli`,
    poster: "img/23.jpg"

  },
  {
    id: '24',
    songName: `Chaka Chak`,
    poster: "img/24.jpg"

  },
  {
    id: '25',
    songName: `Humdard`,
    poster: "img/25.jpg"

  },
  {
    id: '26',
    songName: `Lut Gaye`,
    poster: "img/26.jpg"

  },
  {
    id: '27',
    songName: `Nadiyon Paar`,
    poster: "img/27.jpg"

  },
  {
    id: '28',
    songName: `Mehrama`,
    poster: "img/28.jpg"

  },
  {
    id: '29',
    songName: `Love You Zindagi`,
    poster: "img/29.jpg"

  },
  {
    id: '30',
    songName: `Garmi`,
    poster: "img/30.jpg"

  },
  {
    id: '31',
    songName: `Hauli Hauli`,
    poster: "img/31.jpg"

  },
  {
    id: '32',
    songName: `Just go to Hell Dil`,
    poster: "img/32.jpg"

  },
  {
    id: '33',
    songName: `Faded`,
    poster: "img/33.jpg"

  },
  {
    id: '34',
    songName: `Sunday Best`,
    poster: "img/34.jpg"

  },
  {
    id: '35',
    songName: `Attention`,
    poster: "img/35.jpg"

  },
  {
    id: '36',
    songName: `Traitor`,
    poster: "img/36.jpg"

  },
  {
    id: '37',
    songName: `Shape of You`,
    poster: "img/37.jpg"

  },
  {
    id: '38',
    songName: `Mood`,
    poster: "img/38.jpg"

  },
  {
    id: '39',
    songName: `Bad Guy`,
    poster: "img/39.jpg"

  },
  {
    id: '40',
    songName: `So What`,
    poster: "img/40.jpg"

  },
  {
    id: '41',
    songName: `Photograph`,
    poster: "img/41.jpg"

  },
  {
    id: '42',
    songName: `Numb`,
    poster: "img/42.jpg"

  },
  {
    id: '43',
    songName: `Sorry`,
    poster: "img/43.jpg"

  },
  {
    id: '44',
    songName: `Counting Stars`,
    poster: "img/44.jpg"

  }
]
// let m=document.getElementById('mood').innerText.toLowerCase();
// let allsongs=document.querySelectorAll('.songItem');
// allsongs.forEach((e)=>{
//   // console.log(e.category);
//   // e.classList.add(e.category);
//   if(!e.classList.contains(m)){
//     e.classList.add('hide');
//   }else{
//     e.classList.remove('hide');
//   }
// })

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');

  } else {
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
  }
})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {


    element.classList.add('bi-play-circle-fill');
    element.classList.remove('bi-pause-circle-fill');

  })
}

const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((element) => {

    element.style.background = "rgb(105,105,170,0)";

  })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${index}.mp3`;
    // music.src = `https://github.com/Mishthisinghal/audio/tree/main/audio/${index}.mp3`;

    poster_master_play.src = `img/${index}.jpg`;
    // const audio = new Audio(music);
    // audio.play();
    music.play();
    let song_title = songs.filter((ele) => {
      return ele.id == index;
    })
    song_title.forEach(ele => {
      let { songName } = ele;
      title.innerHTML = songName;
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    music.addEventListener('ended', () => {
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    })

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105,105,170,.1)";



  })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
  masterPlay.classList.add('bi-play-fill');
  masterPlay.classList.remove('bi-pause-fill');
  wave.classList.remove('active2');
})

let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-up-fill');
  }
  if (vol.value > 0) {
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-up-fill');
  }
  if (vol.value > 50) {
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
console.log(back);
console.log(next);

back.addEventListener('click', () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
  }

  music.src = `audio/${index}.mp3`;
  // music.src=`https://drive.google.com/file/d/1vfk2Krv2H0CYmHe2tLQ4wWgOv6eTVrF7/view`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  })
  song_title.forEach(ele => {
    let { songName } = ele;
    title.innerHTML = songName;
  })

  makeAllPlays()

  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105,105,170,.1)";

})

next.addEventListener('click', () => {
  index -= 0;
  index += 1;
  if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  })
  song_title.forEach(ele => {
    let { songName } = ele;
    title.innerHTML = songName;
  })

  makeAllPlays();

  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105,105,170,.1)";

})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
  pop_song.scrollLeft -= 100;
})

right_scroll.addEventListener('click', () => {
  pop_song.scrollLeft += 100;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
  item.scrollLeft -= 100;
})

right_scrolls.addEventListener('click', () => {
  item.scrollLeft += 100;
})

//search
document.getElementById('search').addEventListener('click', () => {
  let searchInput = document.getElementById("search-input").value;
  let songs = document.querySelectorAll(".songItem");

  songs.forEach((song) => {
    if (!song.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
      song.classList.add('hide');

    } else {
      song.classList.remove('hide');
    }
  })
})