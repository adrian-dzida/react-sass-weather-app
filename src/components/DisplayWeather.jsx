import React from "react";

const DisplayWeather = ({ weather }) => {
  const timeBuilder = (d) => {
    let hour = d.getHours();
    let minutes = d.getMinutes();

    return `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  const date = new Date();

  //time zone setting and simple handling day saving time
  if (date.getMonth() < 3 || date.getMonth() > 9) {
    date.setSeconds(weather.timezone - 3600);
  } else {
    date.setSeconds(weather.timezone);
  }

  return (
    <div className="weatherbox">
      <div className="weatherbox__info">
        <p className="weatherbox__location">
          {weather.name}, {weather.sys.country}
        </p>
        <p className="weatherbox__temp">
          {Math.floor(weather.main.temp)}
          <span className="weatherbox_symbol">ºc</span>
        </p>
        <p className="weatherbox__state">{weather.weather[0].main}</p>
      </div>
      <p className="weatherbox__time">{timeBuilder(date)}</p>
      <p className="weatherbox__date">{dateBuilder(date)}</p>
    </div>
  );
};

export default DisplayWeather;
