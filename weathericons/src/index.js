import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
This lab is meant to provide additional practice creating reusable React Components.

In the HTML section of this CodePen you will find five weather elements that generate the output you are seeing now. 

Perform the folliowng to complete the lab: 

- Create an array called `weatherData` that will contain five objects with the following properties:  `img`, `conditions` and `time`.
- Populate those objects based on those values assigned in the HTML.
- Create a `WeahterIcons`  component and pass it the `weatherData` array as `props`.
- The `WeatherIcons` component will then render five `weather` divs based on properties of the objects in the `weatherData` array.
*/

const weatherData = [
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
    conditions: "clear",
    time: "day"
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
    conditions: "clear",
    time: "day"
  },
  {
    img:
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
    conditions: "",
    time: ""
  },
  {
    img:
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
    conditions: "clear",
    time: "day"
  },
  {
    img:
      "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
    conditions: "clear",
    time: "day"
  }
];

class Weather extends React.Component {
  render() {
    return (
      <>
        <div class="weather">
          <img src={this.props.img} alt="" />
          <p>
            <span>conditions:</span> {this.props.conditions}
          </p>
          <p>
            <span>time:</span> {this.props.time}
          </p>
        </div>
      </>
    );
  }
}

class WeahterIcons extends React.Component {
  render() {
    let weatherTiles = this.props.weatherData.map((weather, index) => (
      <Weather
        img={weather.img}
        conditions={weather.conditions}
        time={weather.time}
      />
    ));
    return <>{weatherTiles}</>;
  }
}

ReactDOM.render(
  <WeahterIcons weatherData={weatherData} />,
  document.getElementById("weather-container")
);
