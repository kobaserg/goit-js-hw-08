import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', onPlay);

function onPlay() {
  let timeUpdate = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(timeUpdate);

  player.on('timeupdate', onUpdateTime);

  function onUpdateTime(seconds) {
    localStorage.setItem('videoplayer-current-time', seconds.seconds);
  }
}
