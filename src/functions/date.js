function timeToMinutes(time) {
  const splitTime = time.split(':');
  return parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]);
}

function getCurrentTime() {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
}

function getWeekDay() {
  const date = new Date();
  return date.getDay();
}

function checkTimeBetween(from, to) {
  const now = getCurrentTime();
  if (now >= timeToMinutes(from) && now <= timeToMinutes(to)){
    return true;
  }

  return false;
}

function getWorkingHours(hours){
  //Prepares array with open times on each week day.
  //Using JS default day values of 0-6 instead of 1-7 for easier array manipulation
  const schedule = [];
  for (var i = 0; i <= 6; i++){
    schedule[i] = [];
  }

  try {
    //Map each work hour and check if it ends on next day
    hours.map((item, index) => {
      if(timeToMinutes(item.from) > timeToMinutes(item.to)){
        item.days.map(weekday => {
          //Subtracting 1 from each week day so it matches JS default day of the week values
          schedule[weekday - 1].push({from: item.from, to: "23:59"})

          //Checks if saturday and adjusts next day to sunday
          const nextDay = weekday < 7 ? weekday : 0;
          schedule[nextDay].push({from: "00:00", to: item.to})
        })
      } else {
        item.days.map(weekday => {
          schedule[weekday - 1].push({from: item.from, to: item.to})
        })
      }
    })
  } catch (e) {
    console.log(e)
  }

  return schedule;
}

export {
  timeToMinutes,
  getCurrentTime,
  getWeekDay,
  checkTimeBetween,
  getWorkingHours
}