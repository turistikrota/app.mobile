import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Services, apiUrl } from "../config/services";
import { httpClient } from "../http/client";
import { RootState } from "../store";
import { setAuth, setFcmTokenIsSet, setLoading } from "../store/auth.store";
import { useAlert } from "./alert";

const useAuth = (): void => {
  const isFetched = useSelector((state: RootState) => state.auth.isFetched);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const fcmIsSet = useSelector((state: RootState) => state.auth.fcmIsSet);
  const fcmToken = useSelector((state: RootState) => state.auth.fcmToken);
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (fcmToken == "" || fcmIsSet == true || isAuthenticated == false) return;
    httpClient
      .patch(apiUrl(Services.Auth, "/fcm"), {
        token: fcmToken,
      })
      .then((res) => {
        dispatch(setFcmTokenIsSet(true));
      })
      .catch((err) => {
        alert.alert(JSON.stringify(err.response.data));
      })
      .finally(() => {});
  }, [fcmIsSet, fcmToken, isAuthenticated]);

  useEffect(() => {
    if (isFetched) return;
    dispatch(setLoading(true));
    httpClient
      .get(apiUrl(Services.Auth, "/"))
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setAuth({
              isAuthenticated: true,
              isFetched: true,
              isError: false,
              loading: false,
            })
          );
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.status === 401) {
          setAuth({
            isAuthenticated: false,
            isFetched: true,
            isError: false,
            loading: false,
          });
          return;
        }
        setAuth({
          isAuthenticated: false,
          isFetched: true,
          isError: true,
          loading: false,
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [isFetched]);

  return;
};

export default useAuth;
