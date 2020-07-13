/* public/js/led/management.js */
'use strict';

const ledOnBtn = document.querySelector('#led-on'),
  ledOffBtn = document.querySelector('#led-off');

const status = document.querySelector('#status');

function onLed() {
  fetch('/on', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    }
  })
    .then((promise) => promise)
    .then((result) => {
      if (result) {
        status.innerText = `LED가 켜졌습니다`;
      }
    });
}

function offLed() {
  fetch('/off', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    }
  })
  .then((promise) => promise)
  .then((result) => {
    if (result) {
      status.innerText = `LED가 꺼졌습니다`;
    }
  });
}

function init() {
  ledOnBtn.addEventListener('click', onLed);
  ledOffBtn.addEventListener('click', offLed);
}

init();