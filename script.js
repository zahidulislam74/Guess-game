// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmp = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   sum = 0;
//   for (let i = 0; i <= temp.length - 1; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmp([3, 7, 4, 8, 1]);

// const amplitude = calcTempAmp(temperatures);
// console.log(amplitude);
// max = 3
// max= 7

// PROBLEM 2
// function should now recieve 2 arrays of temps

// understand the problem
//- with 2 arrays, shuold we implement functionality twice?
// Answer: no

// 2) Breaking into sub problems
// - Merge 2 arrays //we can use concat method
// -
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmp = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i <= temp.length - 1; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmp([3, 7, 4, 8, 1]);

const amplitude = calcTempAmp([3, 5, 1], [0, 9, 4]);
console.log(amplitude);

// celsious t kelvin

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

/*
Coding Challenge #1 
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..." 
Your tasks: 
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets. 
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems! 
Test data: 
§ Data 1: [17, 21, 23] 
§ Data 2: [12, 5, -5, 0, 4]
*/

// understand the problem
//- Array transformm to string, separated by ...
// what is the x days? Answer: index+1

// 2) Breaking into sub problems
// - transform array into string
// - transform each element to srtring with C
//- strings needs to contain day(index+1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[3]}ºC `);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(" ... " + str);
};
printForecast(data1);
printForecast(data2);
