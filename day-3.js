// Activity - 1

// Task - 1

const num = 14;
if (num > 0) {
  console.log(num + " is positive number");
} else {
  console.log(num + " is negative or zero");
}

// Task - 2

const age = 22;
if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("The person is not eligible to vote");
}

// Activity - 2

// Task - 3

let a = 4;
let b = 1;
let c = 2;

if (a >= b) {
  if (a >= c) {
    console.log(`a = ${a} is larger number`);
  } else {
    console.log(`c = ${c} is larger number`);
  }
} else {
  if (b >= c) {
    console.log(`b = ${b} is larger number`);
  } else {
    console.log(`c = ${c} is larger number`);
  }
}

// Activity - 3

// Task - 4

let day = 7;

switch (day) {
  case 1:
    console.log("Today is monday");
    break;
  case 2:
    console.log("Today is tuesday");
    break;
  case 3:
    console.log("Today is wednesday");
    break;
  case 4:
    console.log("Today is thursday");
    break;
  case 5:
    console.log("Today is friday");
    break;
  case 6:
    console.log("Today is saturday");
    break;
  case 7:
    console.log("Today is sunday");
    break;

  default:
    console.log("error");
    break;
}

// Task - 5

let score = 82;

switch (true) {
  case score >= 90:
    console.log("you scored A grade");

    break;
  case score >= 80:
    console.log("you scored B grade");

    break;
  case score >= 60:
    console.log("you scored C grade");

    break;
  case score >= 35:
    console.log("you scored D grade");

    break;
  case score <= 34:
    console.log("you scored F grade");

    break;
  default:
    console.log("error");
    break;
}

// Activity - 4

// Task - 6

let evenOdd = 3;
evenOdd % 2 === 0
  ? console.log("The number is even")
  : console.log("The number is odd");

//   Activity - 5

// Task - 7

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not leap year`);
}
