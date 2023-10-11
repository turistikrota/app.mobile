import { router } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingFullPage from "../components/shared/LoadingFullPage";
import useAuth from "../hooks/auth";
import { RootState } from "../store";

type AuthGuard = {
  Required: React.FC<React.PropsWithChildren>;
  Optional: React.FC<React.PropsWithChildren>;
  Forbidden: React.FC<React.PropsWithChildren>;
};

const AuthRequiredGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { loading, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, []);

  if (loading) return <LoadingFullPage />;
  return <>{children}</>;
};

const AuthOptionalGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  useAuth();
  return <>{children}</>;
};

const AuthForbiddenGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { loading, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  if (loading) return <LoadingFullPage />;
  return <>{children}</>;
};

const AuthGuard: AuthGuard = {
  Required: AuthRequiredGuard,
  Optional: AuthOptionalGuard,
  Forbidden: AuthForbiddenGuard,
};

export default AuthGuard;
