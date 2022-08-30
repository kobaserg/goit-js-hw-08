import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', onPlay);

function onPlay() {
  let timeUpdate = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(timeUpdate);

  player.on('timeupdate', throttle(onUpdateTime, 1000));

  function onUpdateTime(time) {
    console.log(time);
    if (time !== null) {
      localStorage.setItem('videoplayer-current-time', time.seconds);
    }
  }
}
