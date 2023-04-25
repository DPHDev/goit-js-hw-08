import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('vimeo-player');
const player = new Vimeo.Player(video);

player.on('play', function () {
  console.log('played the video!');
});

// let time; //tiempo en segundos
// if (localStorage.getItem('currentTime')) {
//     time = localStorage.getItem('currentTime');
// } else {
//     time = 0;
// }
//   //Capturando el tiempo con el método getCurrentTime y almacenandolo en el local storage
//   player
//     .on('timeupdate', throttle(function (data) {
//       // seconds = the current playback position
//       time = data.seconds;
//       localStorage.setItem('currentTime', time);
//     })
//     .catch(function (error) {
//       // an error occurred
//       console.log(error);
//     }));

// //Colocando el tiempo con el método setCurrentTime, obtenido del local storage

// player.setCurrentTime(time).then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });