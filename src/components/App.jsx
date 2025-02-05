import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { refreshUserThunk } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import NotFound from "../pages/NotFound/NotFound";
import Layout from "./Layout";
import Contacts from "../pages/Contacts/Contacts";
import LoginForm from "../pages//LoginForm/LoginForm";
import Register from "../pages/RegistrationForm/RegistrationForm";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home/Home";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
