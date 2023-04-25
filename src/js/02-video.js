import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

const video = document.querySelector('vimeo-player');
const player = new Vimeo.Player(video, {
  id: 19231868,
  width: 640,
});

//working in the event timeUpdate using throttle
player.on(
  'timeupdate',
  throttle(function (data) {
      localStorage.setItem('videoplayer-current-time', data.seconds);
      console.log(data.seconds)
  }, 1000)
);


// recargar la pagina desde el punto en el que estaba el video
const currentTime = localStorage.getItem('videoplayer-current-time');
function getCurrentTime(current) {
  if (current === null || current === undefined) {
    return 0;
  }
  return current;
}
player
  .setCurrentTime(getCurrentTime(currentTime))
  .then(function (seconds) {
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