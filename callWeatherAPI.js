// openweathermap API - one call endpoint

function callWeatherAPI() {
  // get latitude and longitude saved in Coordinates spreadsheet
  const coordinateSheet = spreadSheet.getSheetByName('Coordinates');
  const lat = coordinateSheet.getRange(2, 1).getValue();
  const lon = coordinateSheet.getRange(2, 2).getValue();

  // api key - variable should be your api key as a string
  const appid = 'INSERT API KEY!!!';

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${appid}`;
  const response = UrlFetchApp.fetch(url);
  const responseJson = response.getContentText();
  const data = JSON.parse(responseJson);

  return data;
}
