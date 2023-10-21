import { Box, Switch, Text } from "@gluestack-ui/themed";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import LineForm from "~components/LineForm";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { setAccountIsActive } from "~store/account.store";
import { isBaseResponse } from "~types/response";
import { parseApiError } from "~utils/api-error";

type Props = {
  userName: string;
  isActive: boolean;
  onChange: (val: boolean) => void;
};

type SubProps = {
  userName: string;
  onOk: () => void;
};

const EnableForm: React.FC<SubProps> = ({ onOk, userName }) => {
  const { t } = useTranslation("account");
  const alert = useAlert();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<boolean>(false);

  const handleEnable = (userName: string) => {
    setIsLoading(true);
    httpClient
      .put(apiUrl(Services.Account, `/@${userName}/enable`), null)
      .then((res) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        if (res.status === 200) return onOk();
      })
      .catch((err) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        if (err && err.response && err.response.data) {
          setError(err.response.data);
          parseApiError({
            error: err.response.data,
            toast: (msg) => alert.alert(msg),
          });
          return;
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = async (val: boolean) => {
    setValue(val);
    if (!val) return;
    const res = await alert.confirm(t("activation.enable.confirm"));
    if (res.confirmed) handleEnable(userName);
  };

  return (
    <Box>
      <LineForm>
        <LineForm.Left>
          <LineForm.Title>{t("activation.title")}</LineForm.Title>
          <LineForm.Description>
            {t("activation.passiveDesc")}
          </LineForm.Description>
        </LineForm.Left>
        <LineForm.Right>
          <Loading value={isLoading}>
            <Switch
              value={value}
              onToggle={(e) => handleChange(e)}
              trackColor={{
                true: "$green500",
                false: "$red500",
              }}
            />
          </Loading>
        </LineForm.Right>
      </LineForm>
      {!isLoading && !!error && isBaseResponse(error) && (
        <Text color="$red500">{error.message}</Text>
      )}
    </Box>
  );
};

const DisableForm: React.FC<SubProps> = ({ onOk, userName }) => {
  const { t } = useTranslation("account");
  const alert = useAlert();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<boolean>(true);

  const handleDisable = (userName: string) => {
    setIsLoading(true);
    httpClient
      .put(apiUrl(Services.Account, `/@${userName}/disable`), null)
      .then((res) => {
        if (res.status === 200) return onOk();
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          setError(err.response.data);
          parseApiError({
            error: err.response.data,
            toast: (msg) => alert.alert(msg),
          });
          return;
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = async (val: boolean) => {
    setValue(val);
    if (val) return;
    const res = await alert.confirm(t("activation.disable.confirm"));
    if (res.confirmed) handleDisable(userName);
  };

  return (
    <Box>
      <LineForm>
        <LineForm.Left>
          <LineForm.Title>{t("activation.title")}</LineForm.Title>
          <LineForm.Description>
            {t("activation.activeDesc")}
          </LineForm.Description>
        </LineForm.Left>
        <LineForm.Right>
          <Loading value={isLoading}>
            <Switch
              value={value}
              onToggle={(e) => handleChange(e)}
              trackColor={{
                true: "$green500",
                false: "$red500",
              }}
            />
          </Loading>
        </LineForm.Right>
      </LineForm>
      {!isLoading && !!error && isBaseResponse(error) && (
        <Text color="$red500">{error.message}</Text>
      )}
    </Box>
  );
};

const AccountEditProfileActivationForm: React.FC<Props> = ({
  isActive,
  userName,
  onChange,
}) => {
  const { t } = useTranslation("account");
  const dispatch = useDispatch();
  const alert = useAlert();

  const onEnable = () => {
    dispatch(setAccountIsActive(true));
    onChange(true);
    alert.alert(t("activation.enable.success"));
  };

  const onDisable = () => {
    dispatch(setAccountIsActive(false));
    onChange(false);
    alert.alert(t("activation.disable.success"));
  };

  return isActive ? (
    <DisableForm userName={userName} onOk={onDisable} />
  ) : (
    <EnableForm userName={userName} onOk={onEnable} />
  );
};

export default AccountEditProfileActivationForm;
