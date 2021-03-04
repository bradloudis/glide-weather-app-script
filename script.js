const url = `https://api.openweathermap.org/data/2.5/onecall?lat=39.017582&lon=-94.632797&exclude=minutely&units=imperial&appid=6e3bf53c19fcc30b929ad77a8b75ea60`;

/*
 * function to call weather API
 */
function getTodayWeather() {
  const response = UrlFetchApp.fetch(url);
  const responseJson = response.getContentText();
  const data = JSON.parse(responseJson);

  const highTemp = Math.round(data.daily[0].temp.max).toFixed(0);
  const lowTemp = Math.round(data.daily[0].temp.min).toFixed(0);
  const description = data.daily[0].weather[0].description;
  // Logger.log({ highTemp, lowTemp, description });

  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const todaySheet = spreadSheet.getSheetByName('Today');

  // set values to google sheet 'Today'
  // getRange(row, column)
  todaySheet.getRange(2, 2).setValue([highTemp]);
  todaySheet.getRange(2, 3).setValue([lowTemp]);
  todaySheet.getRange(2, 4).setValue([description]);
}

function getSevenDay() {
  const response = UrlFetchApp.fetch(url);
  const responseJson = response.getContentText();
  const data = JSON.parse(responseJson);
  const dailyArray = data.daily;
  dailyArray.forEach((day) => {
    const date = new Date(day.dt);
    const high = Math.round(day.temp.max).toFixed(0);
    const low = Math.round(day.temp.min).toFixed(0);
    console.log(high, low);
  });
}
