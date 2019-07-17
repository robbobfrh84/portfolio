function _rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function _rgbR() {
  return 'rgb('+_rand(0,255)+', '+_rand(0,255)+', '+_rand(0,255)+')';
}
