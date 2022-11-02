"use strict";

const numbers = document.querySelectorAll(".nr");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const ori = document.querySelector(".ori");
const divide = document.querySelector(".divide");
const display = document.querySelector(".number-display");
const clear = document.querySelector(".ac");

let result = 0;

let a = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    a = a + numbers[i].textContent;
    display.textContent = a;
  });
}

plus.addEventListener("click", function () {
  const displayNr = Number(a);
  result += displayNr;
  a = "";
  display.textContent = result;
  equal.addEventListener("click", function () {
    const b = result + Number(a);
    if (!b) {
      display.textContent = 0;
    }

    display.textContent = b;
  });
});

// minus.addEventListener("click", function () {
//   const displayNr = Number(a);
//   if (result) {
//     result = result - displayNr;
//     a = "";
//     display.textContent = result;
//   } else {
//     result = displayNr;
//   }
// });

ori.addEventListener("click", function () {
  if (!result) {
    result = 1;
  }
  if (!a) {
    display.textContent = result;
  } else {
    const displayNr = Number(a);
    result *= displayNr;
    a = "";
    display.textContent = result;
    equal.addEventListener("click", function () {
      const b = result * Number(a);
      if (!b) {
        display.textContent = 0;
      }

      display.textContent = b;
    });
  }
});

// divide.addEventListener("click", function () {
//   if (!result) {
//     result = 1;
//   }
//   if (!a) {
//     display.textContent = result;
//   } else {
//     const displayNr = Number(a);
//     result = displayNr / result;
//     a = "";
//     // display.textContent = result;
//     equal.addEventListener("click", function () {
//       const b = result / Number(a);
//       if (!b) {
//         display.textContent = 0;
//       }

//       display.textContent = b;
//     });
//   }
// });

clear.addEventListener("click", function () {
  result = 0;
  display.textContent = result;
  a = "";
});
