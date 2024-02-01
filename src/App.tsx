import { ChangeEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

function App() {
  // Hooks
  const [city, setCity] = useState<string>("");
  // Api call

  const searchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()},&limit=5&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  // Onchange function
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setCity(value);

    if (value === "") return;
    searchOptions(value);
  };

  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
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
          <div className="flex mt-10 md:mt-4">
            <input
              type="text"
              value={city}
              className="px-2 py-1 border-4 border-white"
              onChange={onChange}
            />
            <button className="rounded-r-md border-4 border-zinc-100 text-zinc-100 px-4 py-1 cursor-pointer hover:border-zinc-500 hover:text-zinc-500 ">
              <BsSearch className="text-2xl" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
