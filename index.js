const moment = require("moment-timezone");
const { day, dayConfig, dateConfig, timeConfig } = require("./constants");

const getDay = (date, language) => {
  language = language || dayConfig.language;
  const newDate = new Date(moment(date));
  const dayNumber = newDate.getDay();
  if (day[dayNumber]) {
    return day[dayNumber][language];
  }
  return null;
};

const getDate = (date, dateString) => {
  dateString = dateString || dateConfig.dateString;
  return moment(date).format(dateString);
};

const getTime = (date, timezone, timeString) => {
  timezone = timezone || timeConfig.timezone;
  timeString = timeString || timeConfig.timeString;
  return moment(date).tz(timezone).format(timeString);
};

module.exports = { getDay, getDate, getTime };
