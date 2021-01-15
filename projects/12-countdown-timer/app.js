const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2021, 2, 27, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 9, 5, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

function format(item) {
  if(item < 10) {
    return item = `0${item}`;
  }
  return item;
}
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${format(hours)}h${format(minutes)}`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1 000 ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // value in ms:
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  // calculate all values
  let days = Math.floor( t/oneDay );
  let hours = Math.floor( (t%oneDay)/oneHour );
  let minutes = Math.floor( (t%oneHour)/oneMinute );
  let seconds = Math.floor( (t%oneMinute)/oneSecond );
  
  // set values array
  const values = [days, hours, minutes, seconds];

  items.forEach( (item, index) => {
    item.innerHTML = format(values[index]);
  });

  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime(); // NB to call function after interval, so you have access for modification
