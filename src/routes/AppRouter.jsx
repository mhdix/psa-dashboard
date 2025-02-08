import { Route, Routes } from "react-router-dom";
import UserList from "../components/UserList";

const AppRouter = () => {
  return (
    <>
      {/* public route */}
      <Routes>
        <Route path="/users" element={<UserList />} />
      </Routes>

      {/* private route */}
    </>
  );
};

export default AppRouter;
