import Search from "./components/Search";
import ForeCast from "./hooks/ForeCast";

function App() {
  const { cities, options, forecast, onChange, onOptionSelect, onSubmit } =
    ForeCast();
  return (
    <>
      <main className="flex justify-center items-center bg-gradient-to-br from-sky-500 via-sky-100 to-sky-950 h-[100vh] w-full">
        {forecast ? (
          "we now have a ForeCast"
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
