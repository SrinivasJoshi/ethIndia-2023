import AccordionContainer from "./components/AccordionContainer";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="flex flex-col items-center justify-evenly font-Lato min-h-screen">
      <h1 className="text-secondary text-7xl font-bold font-Handjet mb-10">Nygma</h1>
      <div className="flex flex-col items-center text-white">
          <img
            src="/images/riddler.gif"
            alt="The riddler"
            className="rounded-xl w-75"
          />
      </div>
      <Rules />
      <AccordionContainer />
    </div>
  );
}

export default App;
