const { nextISSTimesForMyLocation } = require('./iss');

// fetchISSFlyOverTimes ({ latitude: 49.1617, longitude: -123.175 }, function (error, flyOverTimes) {

//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned fly over times:' , flyOverTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  console.log('It worked! Returned next ISS times for my location:' , passTimes);
});