import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      {/* navbar */}
      <ul className="">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      <AppRouter />
    </>
  );
}

export default App;
