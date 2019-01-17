const clock = document.querySelector('#clock')
const date = document.querySelector('#date')
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let timeDate = new Date()

weekDayText = () => days[timeDate.getDay()]

monthText = () => months[timeDate.getMonth()]

dateWithOrdinalIndicator = () => {
  let monthDate = timeDate.getDate().toString()
  if (monthDate.endsWith('1') && monthDate !== '11') {
    return monthDate + 'st'
  } else if (monthDate.endsWith('2') && monthDate !==  '12') {
    return monthDate + 'nd'
  } else if (monthDate.endsWith('3') && monthDate !== '13') {
    return monthDate + 'rd'
  } else {
    return monthDate + 'th'
  }
}

getFullDate = () => date.innerText = weekDayText() + ', ' + dateWithOrdinalIndicator() + ' ' + monthText() + ' ' + timeDate.getFullYear()

zeroCheck = (integer) =>  integer < 10 ? '0' + integer : integer

startClock = () => {
  timeDate = new Date()
  let hour = zeroCheck(timeDate.getHours())
  let minutes = zeroCheck(timeDate.getMinutes())
  let seconds = zeroCheck(timeDate.getSeconds())
  if (parseInt(hour) + parseInt(minutes) + parseInt(seconds) === 0) getFullDate()
  clock.innerText = hour + ':' + minutes + ':' + seconds
  setTimeout(startClock, 1000);
}

document.onload = getDate()
document.onload = startClock()
