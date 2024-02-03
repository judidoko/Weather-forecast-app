export type optionType = {
  name: string;
  lat: number;
  lon: number;
};

export type forecastType = {
  name: string;
  country: string;
  sunset: number;
  sunrise: number;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        gust: number;
        degs: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
};
