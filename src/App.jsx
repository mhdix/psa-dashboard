import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <>
    {/* navbar */}
      <ul>
        <li>finishDraftdfs</li>
        <li>jhg</li>
        <li>hjg ghgv</li>
      </ul>
      
      <Routes>
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
