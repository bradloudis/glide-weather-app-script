// global spreadsheet variable
const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();

function getTodayWeather() {
  // assign today spreadsheet to a variable
  const todaySheet = spreadSheet.getSheetByName('Today');
  //get data using function to callWeather
  const data = callWeatherAPI();

  // create variables for high & low temp, description, and icon
  const highTemp = data.daily[0].temp.max;
  const lowTemp = data.daily[0].temp.min;
  const description = data.daily[0].weather[0].description;
  const icon = data.daily[0].weather[0].icon;

  // row and column variables to match the google spreadsheet
  const row = 2;
  const highTempColumn = 2;
  const lowTempColumn = 3;
  const descriptionColumn = 4;
  const iconColumn = 5;

  // set values to google sheet 'Today'
  // getRange(row, column)
  todaySheet.getRange(row, highTempColumn).setValue([formatTemp(highTemp)]);
  todaySheet.getRange(row, lowTempColumn).setValue([formatTemp(lowTemp)]);
  todaySheet.getRange(row, descriptionColumn).setValue([description]);
  todaySheet.getRange(row, iconColumn).setValue([generateUrl(icon)]);
}
