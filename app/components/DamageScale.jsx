import chroma from 'chroma-js';

module.exports = (function() {
  const colors = ['LightYellow', 'PaleTurquoise', 'FireBrick', 'Maroon', 'Black'];
  const ranges = [0, 0.3333, 0.50, 1.00, 1.50];
  var bezInterpolator = chroma.bezier(colors);
  var scale = chroma.scale(bezInterpolator).domain(ranges).correctLightness();

  return {
    getColor: function(damageValue) {
      return scale(damageValue).hex();
    },
    getMax: () => ranges[ranges.length-1],
    getMin: () => ranges[0],
    getRange: () => ranges,
  }
})();
