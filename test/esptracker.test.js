const EspTracker = require("../esptracker");

const test_result_data1 = {
  imei: 869959999940829,
  fixTime: new Date("2021-03-20T10:49:15.000Z"),
  fixState: 1,
  lat: 48.000001,
  lon: 9.000001,
  altitude: 276,
  speed: 0,
  course: 0,
  fixMode: 1,
  accuracy: 1.7,
  satViewGnss: 21,
  satUseGnss: 4,
  satViewGlonass: NaN,
};

const test_result_data2 = {
  imei: 869959999940829,
  fixTime: new Date("1899-11-30T00:00:00.000Z"),
  lat: NaN,
  lon: NaN,
  altitude: NaN,
  speed: NaN,
  course: NaN,
  fixMode: NaN,
  accuracy: NaN,
  satViewGnss: NaN,
  satUseGnss: NaN,
  satViewGlonass: NaN,
};

const simpleMsg1 = new Buffer.from(
  "869959999940829,1,1,20210320104915.000,48.000001,9.000001,276.200,0.00,0.0,1,,1.7,1.9,0.9,,21,4,,,43,,"
);
const simpleMsg2 = new Buffer.from("869959999940829,1,,,,,,,,,,,,,,,,,,,,");

test("MsgParse Test", () => {
  var tracker = new EspTracker();
  locationResult = tracker.parse(simpleMsg1);

  expect(locationResult.imei).toStrictEqual(test_result_data1.imei);
  expect(locationResult.fixState).toStrictEqual(test_result_data1.fixState);
  expect(locationResult.fixTime).toStrictEqual(test_result_data1.fixTime);
  expect(locationResult.lat).toStrictEqual(test_result_data1.lat);
  expect(locationResult.lon).toStrictEqual(test_result_data1.lon);
  expect(locationResult.speed).toStrictEqual(test_result_data1.speed);
  expect(locationResult.altitude).toStrictEqual(test_result_data1.altitude);
  expect(locationResult.course).toStrictEqual(test_result_data1.course);
  expect(locationResult.accuracy).toStrictEqual(test_result_data1.accuracy);
  expect(locationResult.satViewGnss).toStrictEqual(
    test_result_data1.satViewGnss
  );
  expect(locationResult.satUseGnss).toStrictEqual(test_result_data1.satUseGnss);
  expect(locationResult.satViewGlonass).toStrictEqual(
    test_result_data1.satViewGlonass
  );
});

test("MsgParse Test", () => {
  var tracker = new EspTracker();
  locationResult = tracker.parse(simpleMsg2);

  expect(locationResult.imei).toStrictEqual(test_result_data2.imei);
  expect(locationResult.fixTime).toStrictEqual(test_result_data2.fixTime);
  expect(locationResult.lat).toStrictEqual(test_result_data2.lat);
  expect(locationResult.lon).toStrictEqual(test_result_data2.lon);
  expect(locationResult.speed).toStrictEqual(test_result_data2.speed);
  expect(locationResult.altitude).toStrictEqual(test_result_data2.altitude);
  expect(locationResult.course).toStrictEqual(test_result_data2.course);
  expect(locationResult.accuracy).toStrictEqual(test_result_data2.accuracy);
  expect(locationResult.satViewGnss).toStrictEqual(
    test_result_data2.satViewGnss
  );
  expect(locationResult.satUseGnss).toStrictEqual(test_result_data2.satUseGnss);
  expect(locationResult.satViewGlonass).toStrictEqual(
    test_result_data2.satViewGlonass
  );
});
