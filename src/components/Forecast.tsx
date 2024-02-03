import { forecastType } from "../types";

type Props = {
  forecast: forecastType;
};

const Forecast = ({ forecast }: Props) => {
  return (
    <>
      <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
        <div className="mx-auto w-[300px]"></div>
      </div>
    </>
  );
};

export default Forecast;
