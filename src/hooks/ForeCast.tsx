import { ChangeEvent, useEffect, useState } from "react";
import { optionType } from "../types";

const ForeCast = () => {
  // Hooks
  const [cities, setCities] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<null>(null);

  // Api call
  const searchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()},&limit=5&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  // Onchange function
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setCities(value);

    if (value === "") return;
    searchOptions(value);
  };

  const getForecast = (city: optionType) => {
    // Api Call
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${
        city.lon
      }&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data));
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  // Option Select function
  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setCities(city.name);
      setOptions([]);
    }
  }, [city]);
  return {
    cities,
    options,
    forecast,
    onChange,
    onOptionSelect,
    onSubmit,
  };
};

export default ForeCast;
