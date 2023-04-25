import Player from '@vimeo/player';

const video = document.querySelector('vimeo-player');
const player = new Vimeo.Player(video);

let time; //tiempo en segundos

//Capturando el tiempo con el método getCurrentTime y almacenandolo en el local storage
player.getCurrentTime().then(function (seconds) {
    // seconds = the current playback position
    time = seconds;
      localStorage.setItem('currentTime', time);
  })
  .catch(function (error) {
    // an error occurred
      console.log(error);
  });

//Colocando el tiempo con el método setCurrentTime, obtenido del local storage
time = localStorage.getItem('currentTime');
player.setCurrentTime(time).then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });