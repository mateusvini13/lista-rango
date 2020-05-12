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

function checkTimeBetween(from, to, now) {
  if (now >= timeToMinutes(from) && now <= timeToMinutes(to)){
    return true;
  }

  return false;
}

function getWorkingHours(hours){

  //Prepares array with open times on each week day
  const open = [];
  for (var i = 0; i <= 6; i++){
    open[i] = [];
  }


  try {
    //Map each work hour and check if it ends on next day
    hours.map((item, index) => {
      if(timeToMinutes(item.from) > timeToMinutes(item.to)){
        item.days.map(weekday => {
          //Removes 1 from each week day so it matches javascript default day of the week values
          open[weekday - 1].push({from: item.from, to: "23:59"})

          //Checks if saturday and adjusts next day to sunday
          var nextDay = weekday < 7 ? weekday : 0;
          open[nextDay].push({from: "00:00", to: item.to})
        })
      } else {
        item.days.map(weekday => {
          open[weekday - 1].push({from: item.from, to: item.to})
        })
      }
    })
  } catch (e) {
    console.log(e)
  }

  return open;
}

export {
  timeToMinutes,
  getCurrentTime,
  getWeekDay,
  checkTimeBetween,
  getWorkingHours
}