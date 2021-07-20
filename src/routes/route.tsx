import { useEffect } from "react";
import { ReactElement, useState } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../provider/auth/auth";

interface Props {
  isPrivate?: boolean;
  component: () => ReactElement;
  path: string;
  exact?: boolean;
}

const Route = ({ isPrivate = false, component: Component, ...rest }: Props) => {
  const { auth } = useAuth();
  const [token, setToken] = useState(localStorage.getItem("@token") || "");
  useEffect(() => {
    setToken(localStorage.getItem("@token") || "");
  }, [auth]);
  console.log(token);
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <>
            <Redirect
              to={{
                pathname: isPrivate ? "/login" : "/dashboard",
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Route;
