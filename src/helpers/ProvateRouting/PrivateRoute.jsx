import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  let isLoggin = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggin !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
