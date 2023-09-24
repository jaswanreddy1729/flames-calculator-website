"use strict";

const find = document.querySelector(".calculator_form_btn");
const boyName = document.querySelector("#boy_name");
const girlName = document.querySelector("#girl_name");
const result = document.querySelector("#result");
const resultArr = document.querySelectorAll(".result .flamesDesc_item ");

// Sum of the array
const arrSum = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += Math.abs(arr[i]);
  }
  return res;
};

// calculate flames by using josephus problem
const calcFlames = function (n, k) {
  if (n == 1) {
    return 0;
  } else {
    return (calcFlames(n - 1, k) + k) % n;
  }
};

// find the flames
find.addEventListener("click", function () {
  // console.log(boyName.value, girlName.value);
  // console.log(flamesList);
  const arrCount = [0];
  for (let i = 1; i < 26; i++) {
    arrCount[i] = 0;
  }

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
  const flamesList = ["f", "l", "a", "m", "e", "s"];

  const value = flamesList[calcFlames(6, flamesCount)];
  resultArr.forEach((item) => {
    item.style.display = "none";
  });
  const resultEle = document.querySelector(`#${value}`);
  // console.log(resultEle);
  resultEle.style.display = "block";
  // resultEle.classList.add("display");
  // switch (value) {
  //   case "f":
  //     result.textContent = "Friends";
  //     break;
  //   case "l":
  //     result.textContent = "Love";
  //     break;
  //   case "a":
  //     result.textContent = "Affection";
  //     break;
  //   case "m":
  //     result.textContent = "Marriage";
  //     break;

  //   case "e":
  //     result.textContent = "Enemy";
  //     break;
  //   case "s":
  //     result.textContent = "Siblings";
  //     break;

  //   default:
  //     break;
  // }
});
