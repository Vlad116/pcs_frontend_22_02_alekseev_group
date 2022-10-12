// import logo from "./logo.svg";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Main from "../pages/main";
import Basket from "../pages/basket";
import Product from "../pages/product";
import Auth from "../pages/auth";

import s from "./App.module.scss";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

function App() {
  const userToken = useSelector((state) => state.user.currentUserToken);
  console.log(userToken);
  const renderProtectedRoute = (component) => (
    <ProtectedRoute isAuthenticated={userToken !== ""}>
      {component}
    </ProtectedRoute>
  );

  return (
    <div className={s.root}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={renderProtectedRoute(<Main />)} />
        <Route path="/basket" element={renderProtectedRoute(<Basket />)} />
        <Route
          path="/product/:id"
          element={renderProtectedRoute(<Product />)}
        />
      </Routes>
    </div>
  );
}

export default App;
