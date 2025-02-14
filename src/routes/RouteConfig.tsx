import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes'

const RouteConfig = () => {
  return (
    <>
    <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            //exact={route.exact}
            Component={route.element}
          />
        ))}
      </Routes>
    </>
  );
};

export default RouteConfig;
