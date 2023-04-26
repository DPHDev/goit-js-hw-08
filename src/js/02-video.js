import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('vimeo-player');
const player = new Player(iframe);
const time = localStorage.getItem('currentTime');

//Colocando el tiempo con el método setCurrentTime, obtenido del local storage
player
  .setCurrentTime(time)
  .then()
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('Range Error');
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        console.log(error);
        break;
    }
  });

//Capturando el tiempo con el método getCurrentTime y almacenandolo en el local storage
player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(seconds => {
        localStorage.setItem('currentTime', seconds);
      })
      .catch(function (error) {
        // an error occurred
        console.log(error);
      });
  }, 1000)
);
