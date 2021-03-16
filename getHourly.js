function getHourly() {
  // assign hourly spreadsheet to a variable
  const hourlySheet = spreadSheet.getSheetByName('Hourly');
  //get data using function to callWeather
  const data = callWeatherAPI();
  //assign hourly information to a variable
  const hourlyArray = data.hourly;

  hourlyArray.forEach((item, index) => {
    // date and hour information
    const date = new Date(item.dt * 1000);
    let hour = date.getHours();

    // format number for display using 12 hr time
    if (hour === 12) {
      hour = `${hour}:00pm`;
    } else if (hour === 0) {
      hour = `${hour + 12}:00am`;
    } else if (hour > 12) {
      hour = `${hour - 12}:00pm`;
    } else {
      hour = `${hour}:00am`;
    }

    // temperature, real feel, and icon variables
    const temp = item.temp;
    const realFeel = item.feels_like;
    const icon = item.weather[0].icon;

    // row and column variables to match the google spreadsheet
    const row = index + 2;
    const timeColumn = 1;
    const tempColumn = 2;
    const realFeelColum = 3;
    const iconColumn = 4;

    // setting values to google spreadsheet
    hourlySheet.getRange(row, timeColumn).setValue([hour]);
    hourlySheet.getRange(row, tempColumn).setValue([formatTemp(temp)]);
    hourlySheet
      .getRange(row, realFeelColum)
      .setValue([`Feels Like ${formatTemp(realFeel)}`]);
    hourlySheet.getRange(row, iconColumn).setValue([generateUrl(icon)]);
  });
}
