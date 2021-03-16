const url = `insert url and api key to google script`;

const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
const todaySheet = spreadSheet.getSheetByName('Today');
const sevenDaySheet = spreadSheet.getSheetByName('7-Day Forecast');
const hourlySheet = spreadSheet.getSheetByName('Hourly');

/*
 * function calls weather API
 * sets values for high, low, description, icon in 'Today' sheet
 */
function getTodayWeather() {
  const response = UrlFetchApp.fetch(url);
  const responseJson = response.getContentText();
  const data = JSON.parse(responseJson);

  const highTemp = Math.round(data.daily[0].temp.max).toFixed(0);
  const lowTemp = Math.round(data.daily[0].temp.min).toFixed(0);
  const description = data.daily[0].weather[0].description;
  const icon = data.daily[0].weather[0].icon;

  // set values to google sheet 'Today'
  // getRange(row, column)
  todaySheet.getRange(2, 2).setValue([`${highTemp}℉`]);
  todaySheet.getRange(2, 3).setValue([`${lowTemp}℉`]);
  todaySheet.getRange(2, 4).setValue([description]);
  todaySheet
    .getRange(2, 5)
    .setValue([`http://openweathermap.org/img/wn/${icon}@2x.png`]);
}

/**
 * function calls weather API
 * sets values for date, high, low in '7-Day' Sheet
 */
function getSevenDay() {
  const response = UrlFetchApp.fetch(url);
  const responseJson = response.getContentText();
  const data = JSON.parse(responseJson);
  const dailyArray = data.daily;
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  dailyArray.forEach((day, index) => {
    const date = new Date(day.dt * 1000);
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = weekdays[dayOfWeekIndex];

    const high = Math.round(day.temp.max).toFixed(0);
    const low = Math.round(day.temp.min).toFixed(0);

    // getRange(row, column)
    const row = index + 2;
    const dateColumn = 1;
    const dayColumn = 2;
    const highColumn = 3;
    const lowColumn = 4;

    sevenDaySheet.getRange(row, dateColumn).setValue([date]);
    sevenDaySheet.getRange(row, dayColumn).setValue([dayOfWeek]);
    sevenDaySheet.getRange(row, highColumn).setValue([`${high}℉`]);
    sevenDaySheet.getRange(row, lowColumn).setValue([`${low}℉`]);
  });
}

/**
 * function calls weather API
 * sets values for hour, temp in 'Hourly' Sheet
 */
function getHourly() {
  const response = UrlFetchApp.fetch(url);
  const responseJson = response.getContentText();
  const data = JSON.parse(responseJson);
  const hourlyArray = data.hourly;

  hourlyArray.forEach((item, index) => {
    const date = new Date(item.dt * 1000);
    let hour = date.getHours();
    hour > 12 ? (hour = `${hour - 12}:00pm`) : (hour = `${hour}:00am`);
    hour === 0 && (hour = 12);
    const temp = Math.round(item.temp);
    const icon = item.weather[0].icon;

    const row = index + 2;
    const timeColumn = 1;
    const tempColumn = 2;
    const iconColumn = 3;

    hourlySheet.getRange(row, timeColumn).setValue([hour]);
    hourlySheet.getRange(row, tempColumn).setValue([`${temp}℉`]);
    hourlySheet
      .getRange(row, iconColumn)
      .setValue([`http://openweathermap.org/img/wn/${icon}@2x.png`]);
  });
}
