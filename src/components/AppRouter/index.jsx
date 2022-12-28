import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import routes from "../../routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const RouteComponent = route.element;
        return (
          <Route
            path={route.path}
            element={<RouteComponent />}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Home to="/vite-react-test/home" replace />} />
    </Routes>
  );
};

export default AppRouter;
