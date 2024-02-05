import { BsWind } from "react-icons/bs";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { SiRainmeter } from "react-icons/si";

type Props = {
  icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop";
  title: string;
  info: string | JSX.Element;
  description: string;
};

const icons = {
  wind: <BsWind />,
  feels: <WiThermometer />,
  humidity: <WiHumidity />,
  visibility: <MdVisibility />,
  pressure: <BiTime />,
  pop: <SiRainmeter />,
};

const WeatherPredicts = ({
  icon,
  title,
  info,
  description,
}: Props): JSX.Element => {
  const Icon = icons[icon];
  return (
    <>
      <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg p-2 mb-5 flex flex-col justify-between ">
        <div className="flex items-center text-sm font-bold">
          {Icon} <h4 className="ml-1"> {title}</h4>
        </div>
        <h3 className="mt-2 text-lg">{info}</h3>
        <p className="text-xs font-bold">{description}</p>
      </article>
    </>
  );
};

export default WeatherPredicts;
