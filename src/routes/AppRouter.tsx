import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { Dashboard, AppSettings, Error, Profile } from "../modules";

const AppRouter: FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<AppSettings />} />
    <Route path="/oops" element={<Error />} />
    <Route path="/profile" element={<PrivateRoute component={Profile} />} />

    <Route index element={<Navigate replace to="dashboard" />} />
    <Route path="*" element={<Navigate replace to="dashboard" />} />
  </Routes>
);

export default AppRouter;
