const clock = document.querySelector('#clock')
const date = document.querySelector('#date')
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let timeDate = new Date()

weekDay = () => days[timeDate.getDay()]

month = () => months[timeDate.getMonth()]

dateCheck = () => {
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

zeroCheck = (i) => {
  if (i < 10) {
    let sec = '0' + i
    return sec
  } else {
    return i
  }
}

getDate = () => date.innerHTML = `${weekDay()}, ${dateCheck()} ${month()} ${timeDate.getFullYear()}`

startClock = () => {
  timeDate = new Date()
  let hour = zeroCheck(timeDate.getHours())
  let minutes = zeroCheck(timeDate.getMinutes())
  let seconds = zeroCheck(timeDate.getSeconds())
  if (parseInt(hour) + parseInt(minutes) + parseInt(seconds) == 0) {
    getDate()
  }
  clock.innerHTML = hour + ':' + minutes + ':' + seconds
  setTimeout(startClock, 1000);
}

window.onload = getDate()
window.onload = startClock()
