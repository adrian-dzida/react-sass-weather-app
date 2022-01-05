import React, { useState } from "react";
import SearchBox from "./SearchBox";
import DisplayWeather from "./DisplayWeather";
import Start from "./Start";

const api = {
  key: "17e2ed1b85d591171aa9560b453292fc",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState();

  const handleSearchForm = (e) => {
    e.preventDefault();

    const query = e.target.queryInput.value;

    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong, try again.");
      })
      .then((data) => setWeather(data))
      .catch((err) => {
        setWeather();
        alert(err);
      });

    e.target.queryInput.value = "";
  };

  const handleChangeBcg = (weather) => {
    switch (weather) {
      case "Clear":
        return "clear";
      case "Clouds":
        return "clouds";
      case "Snow":
        return "snow";
      case "Rain":
        return "rain";
      case "Thunder":
        return "thunder";
      default:
        return "";
    }
  };

  return (
    <div
      className={`app ${weather === undefined ? "" : handleChangeBcg(weather.weather[0].main)
        }`}
    >
      <SearchBox search={handleSearchForm} />
      {weather === undefined ? <Start /> : <DisplayWeather weather={weather} />}
    </div>
  );
}

export default App;
