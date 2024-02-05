import { ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { optionType } from "../types";

type Props = {
  cities: string;
  options: [];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

function Search({
  cities,
  options,
  onChange,
  onOptionSelect,
  onSubmit,
}: Props) {
  return (
    <>
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-500 via-sky-100 to-sky-950 h-[100vh] w-full">
        <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-800 ">
          <h1 className="text-4xl font-thin">
            Weather <span className="font-black">Forecast</span>
          </h1>
          <p className="text-sm mt-2">
            Enter below a any location you want to know the weather of and
            select an option from the dropdown
          </p>
          <div className="relative flex mt-10 md:mt-4">
            <input
              type="text"
              value={cities}
              className="px-2 py-1 border-4 border-white"
              onChange={onChange}
            />
            <ul className="absolute top-9 bg-white rounded-b-md">
              {options.map((option: optionType, index: number) => (
                <li key={index} className="px-2 py-2">
                  <button
                    onClick={() => onOptionSelect(option)}
                    className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  >
                    {option.name}
                    {option.country}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={onSubmit}
              className="rounded-r-md border-4 border-zinc-100 text-zinc-100 px-4 py-1 cursor-pointer hover:border-zinc-500 hover:text-zinc-500 "
            >
              <BsSearch className="text-2xl" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Search;
