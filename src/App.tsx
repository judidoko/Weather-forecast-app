import Forecast from "./components/Forecast";
import Search from "./components/Search";
import ForeCast from "./hooks/ForecastApi";

function App() {
  const { cities, options, forecast, onChange, onOptionSelect, onSubmit } =
    ForeCast();
  return (
    <>
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-500 via-sky-100 to-sky-950 h-full w-full">
        {forecast ? (
          <Forecast forecast={forecast} />
        ) : (
          <Search
            cities={cities}
            options={options}
            onChange={onChange}
            onSubmit={onSubmit}
            onOptionSelect={onOptionSelect}
          />
        )}
      </main>
    </>
  );
}

export default App;
