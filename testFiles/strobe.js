const {Led, Board}= require('johnny-five');
const board = new Board();
board.on('ready', onReady);

function onReady() {
  const led = new Led(11);

  setInterval(() => {
    led.fadeIn()
    setTimeout(() => led.fadeOut(), 1000)
  }, 2000)
}
