import { Button, Text } from "@gluestack-ui/themed";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { reset } from "~store/account.store";
import { parseApiError } from "~utils/api-error";

type Props = {
  userName: string;
};

const AccountEditProfileDeletionForm: React.FC<Props> = ({ userName }) => {
  const { t } = useTranslation("account");
  const dispatch = useDispatch();
  const alert = useAlert();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onDelete = async () => {
    setLoading(true);
    const res = await alert.confirm(t("deletion.confirm"));
    if (!res.confirmed) return setLoading(false);
    httpClient
      .delete(apiUrl(Services.Account, `/@${userName}`))
      .then((res) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        if (res.status === 200) {
          dispatch(reset());
          router.replace("/panel/account/select");
          return;
        }
      })
      .catch((err) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        if (err && err.response && err.response.data) {
          parseApiError({
            error: err.response.data,
            toast: (msg) => alert.alert(msg),
          });
          return;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Button onPress={onDelete} disabled={loading} action="negative">
      <Loading value={loading} color="$white">
        <Text color="$white">{t("deletion.title")}</Text>
      </Loading>
    </Button>
  );
};

export default AccountEditProfileDeletionForm;
