import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Services, apiUrl } from "../config/services";
import { httpClient } from "../http/client";
import { RootState } from "../store";
import { setAuth, setLoading } from "../store/auth.store";

const useAuth = (): void => {
  const isFetched = useSelector((state: RootState) => state.auth.isFetched);
  const dispatch = useDispatch();

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
  }, []);

  return;
};

export default useAuth;