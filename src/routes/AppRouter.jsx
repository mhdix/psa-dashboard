import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <>
      {/* public route */}
      <Routes>
        <Route path="/users" element={<Home />} />
      </Routes>

      {/* private route */}
    </>
  );
};

export default AppRouter;
