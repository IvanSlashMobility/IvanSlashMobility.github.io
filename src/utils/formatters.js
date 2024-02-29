import i18next from "i18next";


/*
  FORMATS A DATE/TIME BASED ON i18n LOCALE

  More fields can be added to options object, check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
*/
export function getDateString(timestamp, includeWeekday = true, weekdayStyle = "short") {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }
  if(includeWeekday) options['weekday'] = weekdayStyle;
  let dateString = new Date(timestamp).toLocaleDateString(i18next.language, options)

  /* place here any additional formatting you want to do */

  return dateString;
}

/*
  FORMATS TIME BASED ON i18n LOCALE

  More fields can be added to options object, check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
*/
export function getTimeString(timestamp, hour12 = false) {
  const options = {
    hour12: hour12,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }
  
  /* place here any additional formatting you want to do */

  return new Date(timestamp).toLocaleDateString(i18next.language, options)
}

/*
  RETURNS THE ELAPSED TIME BETWEEN TWO DATES
*/
export const getDuration = (init, end) => {
  let startDate = new Date(init);
  let finishDate = new Date(end);
  
  var delta = Math.abs(finishDate - startDate) / 1000;

  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  var seconds = delta % 60;

  return({
    elapsedDays: days,
    elapsedHours: hours,
    elapsedMinutes: minutes,
    elapsedSeconds: seconds
  })
}

/*
  RETURNS A PICTURE FILE FORM READY TO SEND TO AN API 
*/
export const getMediaForm = (pic, fieldName = 'picture') => {
  const uri = pic.uri;
  let uriParts = uri.split(".");
  let fileType = uriParts[uriParts.length - 1];
  let formData = new FormData();
  formData.append(fieldName, {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  return formData;
}

/*
  FORMATS A STRING RESULTING IN THE FIRST LETTER OF EVERY WORD TO UPPER CASE AND THE REST TO LOWERCASE
  
  i.e. INPUT: sOME random String, OUTPUT: Some Random String
*/
export const formatName = (data) => {
  let result = '';
  let name = data.trim().split(' ');
  name.forEach((word, i) => {
    if(i !== 0) result += ' ';
    if(word !== ' ') result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  return result;
}
