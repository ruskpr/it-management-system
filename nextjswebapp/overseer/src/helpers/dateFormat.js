// create a function that gets the days between two dates

const getDaysBetweenDates = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
};

const dateFormat = (date) => {
  var d = new Date(date);
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  var minutes = d.getMinutes();
  var hours = d.getHours();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;

  if (getDaysBetweenDates(new Date(), d) === 0) {
    return `Today at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 1) {
    return `Yesterday at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 2) {
    return `2 days ago at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 3) {
    return `3 days ago at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 4) {
    return `4 days ago at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 5) {
    return `5 days ago at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 6) {
    return `6 days ago at ${strTime}`;
  } else if (getDaysBetweenDates(new Date(), d) === 7) {
    return `1 week ago at ${strTime}`;
  }

  return `${month}/${day}/${year} at ${strTime}`;
};

export default dateFormat;
