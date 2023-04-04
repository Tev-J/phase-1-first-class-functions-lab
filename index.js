// Code your solution in this file!
const returnFirstTwoDrivers = function (scubersDrivers) {
  return scubersDrivers.slice(0, 2);
};

const returnLastTwoDrivers = (scubersDrivers) =>
  scubersDrivers.slice(scubersDrivers.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scubersDrivers, func) {
  return func(scubersDrivers);
}

/*
const testingList = ["a", "b", "c", "d", "e"];
console.log(returnFirstTwoDrivers(testingList));
console.log(returnLastTwoDrivers(testingList));
console.log(createFareMultiplier(5));
console.log(fareDoubler(3));
console.log(selectDifferentDrivers(testingList, returnLastTwoDrivers));
*/
