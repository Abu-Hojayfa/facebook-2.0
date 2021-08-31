import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ children, ...rest }) => {
  
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (name && email) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;