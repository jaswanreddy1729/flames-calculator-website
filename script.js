"use strict";

const find = document.querySelector(".calculator_form_btn");
const boyName = document.querySelector("#boy_name");
const girlName = document.querySelector("#girl_name");
const result = document.querySelector("#result");
let flamesList;

// Array declaration
const arrCount = [0];
for (let i = 1; i < 26; i++) {
  arrCount[i] = 0;
}

// Sum of the array
const arrSum = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += Math.abs(arr[i]);
  }
  return res;
};

// remove count from list
const removeCount = (a, b) => {
  return b % a == 0 ? a - 1 : (b % a) - 1;
};

// find the flames
find.addEventListener("click", function () {
  // console.log(boyName.value, girlName.value);

  // for Boyname arrcount value incr by 1
  for (let i = 0; i < boyName.value.length; i++) {
    let ind = boyName.value.toLowerCase().charCodeAt(i) - 97;
    if (ind >= 0 && ind < 26) {
      arrCount[ind] += 1;
    }
  }

  // for girl name arrcount value decr by 1
  for (let i = 0; i < girlName.value.length; i++) {
    let ind = girlName.value.toLowerCase().charCodeAt(i) - 97;
    if (ind >= 0 && ind < 26) {
      arrCount[ind] -= 1;
    }
  }
  // console.log(arrCount, arrSum(arrCount));

  const flamesCount = arrSum(arrCount);
  // init flames list declaration
  flamesList = ["f", "l", "a", "m", "e", "s"];

  while (flamesList.length !== 1) {
    const rmvCount = removeCount(flamesList.length, flamesCount);
    let newlist = [];
    for (let i = rmvCount + 1; i < flamesList.length; i++) {
      newlist.push(flamesList[i]);
    }
    for (let i = 0; i < rmvCount; i++) {
      newlist.push(flamesList[i]);
    }
    flamesList = [];
    for (let i = 0; i < newlist.length; i++) {
      flamesList.push(newlist[i]);
    }
    // console.log(flamesList, newlist);
  }
  const value = flamesList[0];
  switch (value) {
    case "f":
      result.textContent = "Friends";
      break;
    case "l":
      result.textContent = "Love";
      break;
    case "a":
      result.textContent = "Affection";
      break;
    case "m":
      result.textContent = "Marriage";
      break;

    case "e":
      result.textContent = "Enemy";
      break;
    case "s":
      result.textContent = "Siblings";
      break;

    default:
      break;
  }
});
