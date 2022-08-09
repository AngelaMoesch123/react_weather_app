import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>San Diego</h1>
      <ul>
        <li> Wednesday 07:00</li>
        <li> Sunny</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/SunnyDayV3.svg"
              alt="Sunny"
              className="float-left"
            />

            <span className="temperature">83</span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Wind: 9 MPH</li>
            <li> Humidity: 61%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
