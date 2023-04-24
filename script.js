//AVERAGE PACE CALCULATOR

let hoursInput = document.getElementById("hours")
let minutesInput = document.getElementById("minutes")
let secondsInput = document.getElementById("seconds")
let distanceInput = document.getElementById("distance")

let pickMiles = document.getElementById('mi');
let pickKilometers = document.getElementById('km');

function avgPace() {
  let hours = parseFloat(hoursInput.value * 3600)
  let minutes = parseFloat(minutesInput.value * 60)
  let seconds = parseFloat(secondsInput.value || 0) // || 0 gets rid of the NaN error when seconds input is blank
  let miles = parseFloat(distanceInput.value)
  let totalSeconds = hours + minutes + seconds
  let secondsPerMile = totalSeconds / miles
  let totalMinutes = secondsPerMile / 60
  let secondsDecimal = totalMinutes % 1 * 60 //select only the decimal places and multiple it by 60
  let secondsInteger = Math.floor(secondsDecimal) //rounding down the decimal to an integer
  let minutesInteger = Math.trunc(totalMinutes) //select only the whole number

  if(secondsInteger < 10 ) { //adds leading 0 if seconds is less than 10. I.E. 09, not 9
    document.getElementById("paceSeconds").value = (("0" + secondsInteger).slice(-2)) 
  } else document.getElementById("paceSeconds").value = secondsInteger

  if(minutesInteger < 10) {
    document.getElementById("paceMinutes").value = (("0" + minutesInteger).slice(-2)) 
  } else document.getElementById("paceMinutes").value = minutesInteger

  if(pickMiles.checked) { //THE FOLLOWING CODE NOT INTEGRAL TO CALCULATOR
    document.getElementById("milesDisplay").style.visibility = "visible";
  } else if (pickKilometers.checked) {
    document.getElementById("kilometersDisplay").style.visibility = "visible";
  } 

}

function calcTime() { //CALCULATE TOTAL TIME CALCULATOR
  let secondsInput = document.getElementById("paceSeconds").value
  let minutesInput = document.getElementById("paceMinutes").value
  let seconds = parseFloat(minutesInput * 60)
  let secondsPerUnit = seconds + parseFloat(secondsInput)
  let totalSeconds = secondsPerUnit * document.getElementById("distance").value
  let totalTime = totalSeconds / 60
  let totalHours = totalTime / 60
  let minutes = totalHours % 1 * 60
  let finalSeconds = minutes % 1 * 60
  let hoursHours = Math.floor(totalHours)
  let minutesMinutes = Math.floor(minutes) 
  let secondsSeconds = Math.floor(finalSeconds)

  if(hoursHours < 10 ) { 
    document.getElementById("hours").value = (("0" + hoursHours).slice(-2)) 
  } else document.getElementById("hours").value = hoursHours

  if (minutesMinutes < 10) {
    document.getElementById("minutes").value = (("0" + minutesMinutes).slice(-2)) 
  } else document.getElementById("minutes").value = minutesMinutes

  if (secondsSeconds < 10) {
    document.getElementById("seconds").value = (("0" + secondsSeconds).slice(-2)) 
  } else document.getElementById("seconds").value = secondsSeconds

}

function milesRadio() {
  document.getElementById("kilometersDisplay").style.visibility = "hidden";
}

function kilometersRadio() {
  document.getElementById("milesDisplay").style.visibility = "hidden";
}

function reset() {
  document.getElementById("paceSeconds").value = "";
  document.getElementById("paceMinutes").value = "";
  document.getElementById("distance").value = "";
  document.getElementById("seconds").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("hours").value = "";
  document.getElementById("mi").checked = false;
  document.getElementById("km").checked = false;
  document.getElementById("milesDisplay").style.visibility = "hidden";
  document.getElementById("kilometersDisplay").style.visibility = "hidden";
}












