import { router } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingFullScreen from "~partials/state/LoadingFullScreen";
import useAuth from "../hooks/auth";
import { RootState } from "../store";

type AuthGuard = {
  Required: React.FC<React.PropsWithChildren>;
  Optional: React.FC<React.PropsWithChildren>;
  Forbidden: React.FC<React.PropsWithChildren>;
};

const AuthRequiredGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const loading = useSelector((state: RootState) => state.auth.loading);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, []);

  if (loading) return <LoadingFullScreen />;
  return <>{children}</>;
};

const AuthOptionalGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  useAuth();
  return <>{children}</>;
};

const AuthForbiddenGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const loading = useSelector((state: RootState) => state.auth.loading);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  if (loading) return <LoadingFullScreen />;
  return <>{children}</>;
};

const AuthGuard: AuthGuard = {
  Required: AuthRequiredGuard,
  Optional: AuthOptionalGuard,
  Forbidden: AuthForbiddenGuard,
};

export default AuthGuard;
