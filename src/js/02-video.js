import Player from '@vimeo/player';
const throttle = require('lodash.throttle');


 const iframe = document.querySelector('iframe');
 const player = new Vimeo.Player(iframe);

 player.on('play', function () {
   console.log('played the video!');
 });

 player.getVideoTitle().then(function (title) {
   console.log('title:', title);
 });





function saveTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(saveTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


