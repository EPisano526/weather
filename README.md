# CTEC Project 3

## Overview

This assignment will have you complete the 'Current Forecast' code and also add additional functionality to the page for a 5 day forecast.

## Signing Up for an OpenWeather API account and getting an API key

- Sign up for a free OpenWeather.org account at https://home.openweathermap.org/users/sign_up
  - You will get prompted with your occupation/role. Please select education.
- You will then be brought to home page
- Click on the tab that says "API Keys"
- Now on the right, you will see a section labeled "Create Key".
- In the input box enter 'ctec126' and then click on the button labeled 'Generate'
- You will now see a key generated to the left. You will need this key in order for your JavaScript code to access the API.
- The documentation for the API's can be found at https://openweathermap.org/API
  - You will be using the 'Current Weather Data' and the '5 day / 3 hour Forecast' API's.
  - Current Weather - https://openweathermap.org/current
  - 5 day / 3 hour Forecast - https://openweathermap.org/forecast5
  - You will find the information on the icons for forecasts that you can use on your web pages here https://openweathermap.org/weather-conditions

## Things you need to do

- Review the weather.js code that has been provided. The code for the getCurrentWeather() function is complete and works.
- You must comment all of the JavaScript code that you develop.
- You should also use it to help you develop code for the getWeatherForecast() function.
- You are to develop additional code to show data for the current weather and the forecasted weather to include the following data:
  - Low temperature
  - High temperature
  - Humidity
  - Feels Like
  - Wind Speed
- A second <button> must be added for the 5 day forecast and its listener must call the getWeatherForecast() function. Again, this code will be very similar to the code provided for the current weather.
- You must also add 2 other data points of your choice to both the getCurrentWeather() and getWeatherForecast() functions.
- Change the CSS to make the page more visually appealing

## Submission

Push your work back to GitHub and submit the words "Ready to Grade" in Canvas