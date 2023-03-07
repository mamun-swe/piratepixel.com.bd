import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../utils/Authenticate";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticate = useAuth();

  return (
    <>
      {isAuthenticate ? (
        <Route
          {...rest}
          render={(props) => (
            <>
              <Component {...props} />
            </>
          )}
        />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </>
  );
};
