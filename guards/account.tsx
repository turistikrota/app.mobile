import { router } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useAccount from "~hooks/account";
import LoadingFullScreen from "~partials/state/LoadingFullScreen";
import { RootState } from "~store";

type ForbiddenProps = {
  fallback?: string;
};

type AccountGuard = {
  Required: React.FC<React.PropsWithChildren>;
  Optional: React.FC<React.PropsWithChildren>;
  Forbidden: React.FC<React.PropsWithChildren<ForbiddenProps>>;
};

const AccountRequiredGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const loading = useSelector((state: RootState) => state.account.loading);
  const profile = useSelector((state: RootState) => state.account.profile);
  useAccount(true);

  useEffect(() => {
    if (!profile) {
      router.push("/panel/account/select");
    }
  }, []);

  if (loading) return <LoadingFullScreen />;
  return <>{children}</>;
};

const AccountOptionalGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  useAccount();
  return <>{children}</>;
};

const AccountForbiddenGuard: React.FC<
  React.PropsWithChildren<ForbiddenProps>
> = ({ children, fallback = "/" }) => {
  const loading = useSelector((state: RootState) => state.account.loading);
  const profile = useSelector((state: RootState) => state.account.profile);
  useAccount();

  useEffect(() => {
    if (profile) {
      router.push(fallback);
    }
  }, [profile]);

  if (loading) return <LoadingFullScreen />;
  return <>{children}</>;
};

const AccountGuard: AccountGuard = {
  Required: AccountRequiredGuard,
  Optional: AccountOptionalGuard,
  Forbidden: AccountForbiddenGuard,
};

export default AccountGuard;
