import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homePage";

const PrivateRoute = props => {
const { component: Component, ...rest } = props;
const {isAuthenticated} = useAuth0();

  return isAuthenticated ?  (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;