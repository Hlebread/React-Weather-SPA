import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store";

interface IPrivateRoute {
  component: React.ComponentType;
}

export const PrivateRoute: FC<IPrivateRoute> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthorized);

  if (isAuthenticated) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
