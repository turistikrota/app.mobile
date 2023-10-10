import { useTranslation } from "react-i18next";
import { Alert } from "react-native";

type QuestResponse = {
  confirmed: boolean;
  cancelled: boolean;
  reminder: boolean;
};

type ConfirmResponse = {
  confirmed: boolean;
  cancelled: boolean;
};

export const useAlert = () => {
  const { t } = useTranslation("alert");

  return {
    confirm: (text: string): Promise<ConfirmResponse> => {
      return new Promise<ConfirmResponse>((resolve, reject) => {
        Alert.alert(t("confirm"), text, [
          {
            text: t("cancel"),
            onPress: () => resolve({ confirmed: false, cancelled: true }),
            style: "cancel",
          },
          {
            text: t("ok"),
            onPress: () => resolve({ confirmed: true, cancelled: false }),
          },
        ]);
      });
    },
    alert: (
      text: string,
      ok: boolean | undefined = undefined
    ): Promise<boolean> => {
      return new Promise<boolean>((resolve, reject) => {
        Alert.alert(
          t(
            typeof ok === "undefined"
              ? "alert"
              : `alert_${ok ? "success" : "danger"}`
          ),
          text,
          [
            {
              text: t("ok"),
              onPress: () => resolve(true),
            },
          ]
        );
      });
    },
    quest: (text: string): Promise<QuestResponse> => {
      return new Promise<QuestResponse>((resolve, reject) => {
        Alert.alert(t("quest"), text, [
          {
            text: t("cancel"),
            onPress: () =>
              resolve({ confirmed: false, cancelled: true, reminder: false }),
            style: "cancel",
          },
          {
            text: t("ok"),
            onPress: () =>
              resolve({ confirmed: true, cancelled: false, reminder: false }),
          },
          {
            text: t("reminder"),
            onPress: () =>
              resolve({ confirmed: false, cancelled: false, reminder: true }),
          },
        ]);
      });
    },
  };
};
