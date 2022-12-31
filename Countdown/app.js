const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

// let futureDate = new Date() //current date
let futureDate = new Date(2023, 1, 15, 11, 30, 0)
// console.log(futureDate)//Sun May 15 2022 11:30:00 GMT+0300 (Eastern European Summer Time)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
// console.log(month) //4
// console.log(months[month]) //May

const date = futureDate.getDate()
// let weekday = futureDate.getDay()
// weekday = weekdays[weekday]
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month}, ${year} ${hours}:${minutes}am`

//future time in ms
const futureTime = futureDate.getTime()
// console.log(futureTime) //1684139400000

function getRemainaingTime() {
  const today = new Date().getTime()
  // console.log(today) //1672479210576
  const t = futureTime - today
  // console.log(t) //11660008938

  //1s= 1000ms
  //1m = 60s
  //1h = 60min
  //1day = 24h

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000
  // console.log(oneDay) //86400000 ms in one day
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  //calculate all values
  let days = t / oneDay
  days = Math.floor(days)
  // console.log(days)//134

  let hours = (t % oneDay) / oneHour
  hours = Math.floor(hours)
  // console.log(hours) //22
  // console.log(8 % 3) //remainder -> 2 || 3+3 (+2) = 8

  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  //set values array
  const values = [days, hours, minutes, seconds]
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    } else {
      return item
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
  }
}
//countdown
let countdown = setInterval(getRemainaingTime, 1000)
getRemainaingTime()
