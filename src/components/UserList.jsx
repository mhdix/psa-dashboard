import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUser } from "../features/user/userSlice";

const UserList = () => {
  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUser());
  }, [dispatch]);

  return (
    <div>
      <h1>users</h1>
      <div>
        {loading ? (
          //! ERROR LOADING
          <p>loading ...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          user.map((item) => <p key={item.id}>{item.name}</p>)
        )}
      </div>
    </div>
  );
};

export default UserList;
