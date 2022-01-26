import "./App.scss";
import Home from "./Elements/Pages/Home/Home";
import Login from "./Elements/Pages/Login/Login";
import Register from "./Elements/Pages/Register/Register";
import Watch from "./Elements/Pages/Watch/Watch";
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { Fragment } from "react";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          exact
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <Fragment>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
