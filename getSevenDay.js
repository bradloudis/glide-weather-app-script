function getSevenDay() {
  // assign 7-day spreadsheet to a variable
  const sevenDaySheet = spreadSheet.getSheetByName('7-Day Forecast');
  //get data using function to callWeather
  const data = callWeatherAPI();
  //assign seven day information to a variable
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
    //for each day, create date information
    const date = new Date(day.dt * 1000);
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = weekdays[dayOfWeekIndex];

    //for each day, pull temps and description
    const highTemp = day.temp.max;
    const lowTemp = day.temp.min;
    const description = day.weather[0].description;

    // row and column variables to match the google spreadsheet
    const row = index + 2;
    const dateColumn = 1;
    const dayColumn = 2;
    const highColumn = 3;
    const lowColumn = 4;
    const descriptionColumn = 6;

    // setting values to google spreadsheet
    sevenDaySheet.getRange(row, dateColumn).setValue([date]);
    sevenDaySheet.getRange(row, dayColumn).setValue([dayOfWeek]);
    sevenDaySheet
      .getRange(row, highColumn)
      .setValue([`High ${formatTemp(highTemp)}`]);
    sevenDaySheet
      .getRange(row, lowColumn)
      .setValue([`Low ${formatTemp(lowTemp)}`]);
    sevenDaySheet.getRange(row, descriptionColumn).setValue([description]);
  });
}
