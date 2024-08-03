import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      precipitaion: response.data.main.precipitaion,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.main.icon,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.icon} alt="" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9c2510687917a4dd804679999e5d1803";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
