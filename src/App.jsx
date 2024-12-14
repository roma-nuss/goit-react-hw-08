import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading user data...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<Registration />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
