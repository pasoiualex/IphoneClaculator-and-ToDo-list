"use strict";
console.log("Asfasf");

const sendBtn = document.querySelector(".btnSend");
const inp = document.querySelector(".inputTop");
const clearBtn = document.querySelector(".btnClear");
const tasks = document.querySelector(".undorderLi");
const please = document.querySelector(".please");
const msg = document.querySelector(".msg");

function addTask() {
  please.classList.add("hidden");
  if (inp.value) {
    msg.classList.add("hidden");
    tasks.innerHTML += '<li class="lista-mea">' + inp.value + "</li";
    inp.value = "";
  } else {
    msg.classList.remove("hidden");
  }
}

function handleTask(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

function clear() {
  tasks.textContent = "";
  please.classList.remove("hidden");
  msg.classList.add("hidden");
}

tasks.addEventListener("click", handleTask);
sendBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clear);
