import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from "../helpers";
import { forecastType } from "../types";
import { BsSunrise, BsSunset } from "react-icons/bs";
import WeatherPredicts from "./WeatherPredicts";

type Props = {
  forecast: forecastType;
};

// Degree Unit
const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

const Forecast = ({ forecast }: Props): JSX.Element => {
  //   day temp
  const today = forecast.list[0];

  // to reset Page
  const refresh = () => window.location.reload();

  return (
    <>
      <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
        <div className="mx-auto w-[300px]">
          <section className=" flex items-center justify-between text-center">
            <div>
              <h2 className="text-2xl font-black">
                {forecast.name}{" "}
                <span className="font-thin">{forecast.country}</span>
              </h2>
              <h1 className="text-3xl font-extrabold">
                <Degree temp={Math.round(today.main.temp)} />
              </h1>
              <p className="text-sm">
                {today.weather[0].main} {today.weather[0].description}
              </p>
              <p className="text-sm">
                <span className="font-bold">H:</span>
                <Degree temp={Math.ceil(today.main.temp_max)} />{" "}
                <span className="font-bold">L:</span>
                <Degree temp={Math.floor(today.main.temp_min)} />
              </p>
            </div>
            <div>
              <button
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={refresh}
              >
                Reset
              </button>
            </div>
          </section>
          <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
            {forecast.list.map((item, index) => (
              <div
                key={index}
                className="inline-block text-center w-[50px] flex-shrink-0"
              >
                <p className="text-sm">
                  {index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={`weather-icon-${item.weather[0].description}`}
                />
                <p className="text-sm font-bold">
                  <Degree temp={Math.round(item.main.temp)} />
                </p>
              </div>
            ))}
          </section>
          <section className="flex flex-wrap justify-between text-zinc-700">
            <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg  rounded drop-shadow-lg py-4 mb-5">
              <p>Sunrise</p>
              <BsSunrise className="text-2xl" />
              <span className="mt-2">{getSunTime(forecast.sunrise)}</span>
            </div>
            <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg  rounded drop-shadow-lg py-4 mb-5">
              <p>Sunset</p>
              <BsSunset className="text-2xl" />
              <span className="mt-2">{getSunTime(forecast.sunset)}</span>
            </div>

            <WeatherPredicts
              icon="wind"
              title="Wind"
              info={`${Math.round(today.wind.speed)} Km/h`}
              description={`${getWindDirection(
                Math.round(today.wind.degs)
              )}, gusts ${today.wind.gust.toFixed(1)} Km/h`}
            />
            <WeatherPredicts
              icon="feels"
              title="Feels Like"
              info={<Degree temp={Math.round(today.main.feels_like)} />}
              description={`Feels ${
                Math.round(today.main.feels_like) < Math.round(today.main.temp)
                  ? "Colder"
                  : "Warmer"
              }`}
            />
            <WeatherPredicts
              icon="humidity"
              title="Humidity"
              info={`${today.main.humidity} %`}
              description={getHumidityValue(today.main.humidity)}
            />
            <WeatherPredicts
              icon="pop"
              title="Precipitation"
              info={`${Math.round(today.pop * 1000)}%`}
              description={`${getPop(today.pop)}, clouds at ${
                today.clouds.all
              }%`}
            />
            <WeatherPredicts
              icon="pressure"
              title="Pressure"
              info={`${today.main.pressure} hPa`}
              description={`${
                Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
              } than standard`}
            />
            <WeatherPredicts
              icon="visibility"
              title="Visibility"
              info={`${(today.visibility / 1000).toFixed()} Km`}
              description={getVisibilityValue(today.visibility)}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Forecast;
