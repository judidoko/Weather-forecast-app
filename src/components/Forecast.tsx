import { getSunTime, getWindDirection } from "../helpers";
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

  return (
    <>
      <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
        <div className="mx-auto w-[300px]">
          <section className="text-center">
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
              <BsSunrise className="text-2xl" />
              <span className="mt-2">{getSunTime(forecast.sunrise)}</span>
            </div>
            <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg  rounded drop-shadow-lg py-4 mb-5">
              <BsSunset className="text-2xl" />
              <span className="mt-2">{getSunTime(forecast.sunset)}</span>
            </div>
            {/* Wind */}
            <WeatherPredicts
              icon="wind"
              title="Wind"
              info={`${Math.round(today.wind.speed)} Km/h`}
              description={`${getWindDirection(
                Math.round(today.wind.degs)
              )}, gusts ${today.wind.gust.toFixed(1)} Km/h`}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Forecast;
