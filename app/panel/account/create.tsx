import {
  AlertCircleIcon,
  Button,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { useAccountCreateSchema } from "~schemas/account/create.schema";
import { parseApiError } from "~utils/api-error";

export default function CreateAccountPage() {
  const { t } = useTranslation("account");
  const schema = useAccountCreateSchema();
  const alert = useAlert();
  const [loading, setLoading] = useState(false);
  const form = useFormik({
    initialValues: {
      userName: "",
    },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values) => {
      setLoading(true);
      httpClient
        .post(apiUrl(Services.Account, "/"), values)
        .then(() => {
          router.replace("/panel/account/select");
        })
        .catch((err) => {
          parseApiError({
            error: err.response.data,
            form,
            toast: (msg) => alert.alert(msg),
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <View
      sx={{
        height: "100%",
        backgroundColor: "$white",
        p: "$2",
      }}
    >
      <VStack space="md">
        <FormControl
          size="md"
          isInvalid={!!form.errors.userName && form.touched.userName}
          isRequired={true}
          id="userName"
          nativeID="userName"
        >
          <FormControlLabel mb="$1">
            <FormControlLabelText>
              {t("create.userName.label")}
            </FormControlLabelText>
          </FormControlLabel>
          <Input nativeID="userName">
            <InputField
              type="text"
              value={form.values.userName}
              onChangeText={form.handleChange("userName")}
              onBlur={form.handleBlur("userName")}
              nativeID="userName"
              placeholder={t("create.userName.placeholder")}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{form.errors.userName}</FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button onPress={() => form.handleSubmit()}>
          <Loading color="$white" value={loading}>
            <Text color="$white">{t("create.submit")}</Text>
          </Loading>
        </Button>
      </VStack>
    </View>
  );
}
