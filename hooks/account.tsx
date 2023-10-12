import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Services, apiUrl } from "~config/services";
import { httpClient } from "~http/client";
import { RootState } from "~store";
import { setAccount, setLoading } from "~store/account.store";

export type AccountListItem = {
  avatarUrl: string;
  completedRate: number;
  createdAt: string;
  description: string;
  fullName: string;
  isActive: boolean;
  isVerified: boolean;
  userName: string;
};

export function isAccountListItem(response: any): response is AccountListItem {
  return (
    response &&
    response.avatarUrl !== undefined &&
    response.completedRate !== undefined &&
    response.createdAt !== undefined &&
    response.description !== undefined &&
    response.fullName !== undefined &&
    response.isActive !== undefined &&
    response.isVerified !== undefined &&
    response.userName !== undefined
  );
}

export function isAccountListResponse(
  response: any
): response is AccountListItem[] {
  return Array.isArray(response) && response.every(isAccountListItem);
}

const useAccount = (): void => {
  const isFetched = useSelector((state: RootState) => state.account.isFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFetched) return;
    dispatch(setLoading(true));
    httpClient
      .get(apiUrl(Services.Account, "/selected"))
      .then((res) => {
        if (isAccountListItem(res.data)) {
          dispatch(
            setAccount({
              isFetched: true,
              isError: false,
              loading: false,
              account: res.data,
            })
          );
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.status === 401) {
          dispatch(
            setAccount({
              isFetched: true,
              isError: false,
              loading: false,
              account: null,
            })
          );
          return;
        }
        dispatch(
          setAccount({
            isFetched: true,
            isError: true,
            loading: false,
            account: null,
          })
        );
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, []);

  return;
};

export default useAccount;
