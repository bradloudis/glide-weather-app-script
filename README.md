# Glide Weather App Script

### The repository is a collection of functions from Google App Scripts to populate a Google Sheet connected to a Glide App.

_This application was pair-programmed by Bradley Loudis & Sarah Peters. The code was written in Google App Scripts and copied directly into this GitHub repo for posterity._

## Description

KC Weather App is an application to get weather for KC! Users can get today's weather, a 7-day forecast, and an hourly forecast for the next 48 hours.

## Screen Shots

## Prerequisites

1. You must create an Open Weather API key found [here](https://openweathermap.org/api).

## Installation

1. Create a google spreadsheet called `Glide Weather App`.
2. In the Tools menu, select `<> Script editor`.
3. Create six separate files with names corresponding to the JavaScript files in this repo and paste the functions into the files.
4. Create a new [Glide App](https://www.glideapps.com/). Select an existing Google Sheet as the data source.
5. Coordinates are saved in the `Coordinates` spreadsheet and can be changed depending on your desired location.
6. Insert API key into the `callWeatherAPI function` on line 10.

## Usage

1. View today's high/low temperatures and description upon opening the app.
2. Click on "Hourly" on the bottom menu to see the hourly weather for the next 48 hours. Also includes a "feels like" temperature.
3. Click on "7-Day Forecast" on the bottom menu to see weather for the next seven days. Clicking on each card to see a description along with the high/low

## Acknowledgement

Thank you to Rob Kraft of [Kraft Software, LLC](https://www.kraftsoftware.com/Home.aspx), for mentoring us and being our project manager

## Support

If you have suggestions or issues, please email: [Sarah Peters](sarahnpeters@gmail.com) or [Bradley Loudis](bradley.loudis@gmail.com)
