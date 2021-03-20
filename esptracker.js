module.exports = EspTracker = function () {};

EspTracker.prototype.parse = function (data) {
  const parsed = {};

  var regex = /(\d{15}),(\d*),(\d*),(\d*)\.*\d*,(-*\d*\.*\d*),(-*\d*\.*\d*),(-*\d*)\.*\d*,(\d*\.*\d*),(\d*\.*\d*),(\d*),(\d*),(\d*\.*\d*),(\d*\.*\d*),(\d*\.*\d*),(\d*),(\d*),(\d*),(\d*),(\d*),(\d*),(\d*\.*\d*),(\d*\.*\d*)/;
  var match = regex.exec(data);
  parsed.imei = parseInt(match[1]);
  parsed.gnssState = parseInt(match[2]);
  parsed.fixState = parseInt(match[3]);
  parsed.fixTime = parseFixtime(match[4]);
  parsed.lat = parseFloat(match[5]);
  parsed.lon = parseFloat(match[6]);
  parsed.altitude = parseInt(match[7]);
  parsed.speed = parseInt(match[8]);
  parsed.course = parseInt(match[9]);
  parsed.fixMode = parseInt(match[10]);
  parsed.fixModeStr = parseFixMode(parsed.fixMode);
  parsed.accuracy = parseFloat(match[12]);
  parsed.satViewGnss = parseInt(match[16]);
  parsed.satUseGnss = parseInt(match[17]);
  parsed.satViewGlonass = parseInt(match[18]);

  return parsed;
};

function parseFixtime(time) {
  return new Date(
    Date.UTC(
      time.slice(0, 4),
      time.slice(4, 6) - 1,
      time.slice(6, 8),
      time.slice(8, 10),
      time.slice(10, 12),
      time.slice(12, 14)
    )
  );
}

// TODO
function parseFixMode(mode) {
  modeStr = "";
  switch (mode) {
    // case 0:
    //     modeStr = ''
    //     break;

    default:
      break;
  }
  return modeStr;
}
