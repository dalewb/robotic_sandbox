const five = require('johnny-five');
const board = new five.Board();
board.on('ready', onReady);

function onReady() {
  // if we don't pass a port to the Led constructor it will use
  // the default port (built-in LED)
  const led = new five.Led(11);

  setInterval(() => {
    led.fadeIn()

    // Toggle the led after 5 seconds (shown in ms)
    setTimeout(() => {led.fadeOut()}, 1000)

  }, 2000)
}
