import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('vimeo-player');
const player = new Player(video);

let time; //tiempo en segundos
if (localStorage.getItem('currentTime')) {
    time = localStorage.getItem('currentTime');
} else {
    time = 0;
}

//Colocando el tiempo con el método setCurrentTime, obtenido del local storage
player.setCurrentTime(time).then().catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });

//Capturando el tiempo con el método getCurrentTime y almacenandolo en el local storage
player
  .on('timeupdate', throttle(() => {
    player.getCurrentTime().then((seconds) => {
      localStorage.setItem('currentTime', seconds);
    })
      .catch(function (error) {
        // an error occurred
        console.log(error);
      });
  }, 1000));