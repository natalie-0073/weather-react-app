import React from "react";
import "./weather.css";
export default function Weather() {
  return (
    <div className="row">
      <div className="col-6 current-weather-info">
        <img src="" alt="" id="icon" />
        <span className="current-temp" id="current-temperature">
          19
        </span>
        <span class="cel-fahr">
          <a id="celsius" href="/" class="active">
            &deg;C
          </a>{" "}
          |{" "}
          <a id="fahrenheit" href="/">
            &deg;F
          </a>
        </span>
      </div>
      <div className="col-6 desc-info">
        <span className="humidity">
          Humidity: <span id="humidity">80</span>%
        </span>
        <span className="wind">
          Wind: <span id="wind-speed">3</span>m/s
        </span>
      </div>
    </div>
  );
}
