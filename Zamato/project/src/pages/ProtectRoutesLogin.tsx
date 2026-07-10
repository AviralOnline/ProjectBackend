import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectRoutesProps = {
  isloggedIn: boolean;
  children: React.ReactNode;
};

export default function ProtectRoutes({
  isloggedIn,
  children,
}: ProtectRoutesProps) {
  const location = useLocation();

  if (isloggedIn) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace
      />
    );

   
  }

  return <>{children}</>;
}