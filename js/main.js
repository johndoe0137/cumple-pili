var AppClass = function () {
  var appstate = {
    target: 'my-canvas',
    max: 400,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
    clock: 25,
    rotate: false,
    width: 1920,
    height: 1080,
    start_from_edge: false,
    respawn: true
  };

  var confetti = null;


  var render = function () {
    if (confetti)
      confetti.clear();
    confetti = new ConfettiGenerator(appstate);
    confetti.render();
  };

  var start = function () {
    render();
  };

  var clear = function () {
    confetti.clear();
  }

  return {
    start: start,
    clear: clear,
    render: render
  };
}

var app = null;

window.onload = function () {
  app = new AppClass();
  app.start();
}
