// create a function that gets the days between two dates

const getDaysBetweenDates = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
};

const dateFormat = (date) => {
  var d = new Date(date);
  var day = d.getDate().toString();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var hours = d.getUTCHours();
  var minutes = d.getMinutes();
  var ampm = hours <= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;

  if (
    getDaysBetweenDates(new Date(), d) === 0 &&
    d.getMinutes() === new Date().getMinutes()
  ) {
    return "now";
  } else if (
    getDaysBetweenDates(new Date(), d) === 0 &&
    d.getMinutes() === new Date().getMinutes() - 1
  ) {
    return "1 minute ago";
  } else if (getDaysBetweenDates(new Date(), d) === 0) {
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

  return `${getMonth(month)} ${day}, ${year} at ${strTime}`;
};

// return the string of months taking a number as a parameter
const getMonth = (month) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
};

export default dateFormat;
