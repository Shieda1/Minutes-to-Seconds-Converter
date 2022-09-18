// https://www.omnicalculator.com/conversion/minutes-to-seconds-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const secondsRadio = document.getElementById('secondsRadio');
const minutesRadio = document.getElementById('minutesRadio');

let seconds;
let minutes = v; 

// labels of the inpust
const variable = document.getElementById('variable');

secondsRadio.addEventListener('click', function() {
  variable.textContent = 'Minutes';
  minutes = v;
  result.textContent = '';
});

minutesRadio.addEventListener('click', function() {
  variable.textContent = 'Seconds';
  seconds = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(secondsRadio.checked)
    result.textContent = `Seconds = ${computeseconds().toFixed(5)}`;

  else if(minutesRadio.checked)
    result.textContent = `Minutes = ${computeminutes().toFixed(5)}`;
})

// calculation

function computeseconds() {
  return Number(minutes.value) * 60;
}

function computeminutes() {
  return Number(seconds.value) / 60;
}