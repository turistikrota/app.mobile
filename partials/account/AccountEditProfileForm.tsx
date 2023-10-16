import {
  AlertCircleIcon,
  Box,
  Button,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalContent,
  Text,
  Textarea,
  TextareaInput,
  VStack,
} from "@gluestack-ui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import { FormDescription, FormTitle } from "~components/Form";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { useDayJS } from "~hooks/dayjs";
import { httpClient } from "~http/client";
import Loading from "~partials/state/Loading";
import { useAccountUpdateSchema } from "~schemas/account/update.schema";
import { setNames } from "~store/account.store";
import { parseApiError } from "~utils/api-error";

type Props = {
  fullName: string;
  userName: string;
  description: string;
  birthDate: string | null;
  onUpdate: () => void;
};

const AccountEditProfileForm: React.FC<Props> = ({
  userName,
  fullName,
  description,
  birthDate,
  onUpdate,
}) => {
  const { t, i18n } = useTranslation("account");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const schema = useAccountUpdateSchema();
  const alert = useAlert();
  const dayjs = useDayJS();
  const [pickerShown, setPickerShown] = useState<boolean>(false);
  const [birthDateValue, setBirthDateValue] = useState<Date | null>(
    birthDate ? dayjs(birthDate, "YYYY-MM-DD").toDate() : null
  );

  const form = useFormik({
    initialValues: {
      fullName: fullName,
      description: description,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: schema,
    onSubmit: (values) => {
      setLoading(true);
      httpClient
        .put(apiUrl(Services.Account, `/@${userName}`), {
          fullName: values.fullName,
          description: values.description,
          birthDate: birthDateValue
            ? dayjs(birthDateValue).format("YYYY-MM-DD")
            : undefined,
        })
        .then((res) => {
          if (res.status === 200) {
            alert.alert(t("general.success"));
            dispatch(
              setNames({
                fullName: values.fullName,
                description: values.description,
              })
            );
            form.initialValues = form.values;
            form.resetForm();
            onUpdate();
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.data)
            return parseApiError({
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

  const showPicker = () => {
    setPickerShown(true);
  };

  const resetBirthDate = () => {
    setBirthDateValue(null);
  };

  const onBirthChange = (_: any, selectedDate: Date) => {
    const currentDate = selectedDate || birthDateValue;
    setPickerShown(false);
    setBirthDateValue(currentDate);
  };
  return (
    <VStack space="md">
      <Box>
        <FormTitle>{t("general.title")}</FormTitle>
        <FormDescription>{t("general.subtitle")}</FormDescription>
      </Box>
      <FormControl
        size="md"
        isInvalid={!!form.errors.fullName && form.touched.fullName}
        isRequired={true}
        id="fullName"
        nativeID="fullName"
      >
        <FormControlLabel mb="$1">
          <FormControlLabelText>
            {t("general.fullName.label")}
          </FormControlLabelText>
        </FormControlLabel>
        <Input nativeID="fullName">
          <InputField
            type="text"
            value={form.values.fullName}
            onChangeText={form.handleChange("fullName")}
            onBlur={form.handleBlur("fullName")}
            nativeID="fullName"
            placeholder={t("general.fullName.placeholder")}
          />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{form.errors.fullName}</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl
        size="md"
        isInvalid={!!form.errors.description && form.touched.description}
        isRequired={true}
        id="description"
        nativeID="description"
      >
        <FormControlLabel mb="$1">
          <FormControlLabelText>
            {t("general.description.label")}
          </FormControlLabelText>
        </FormControlLabel>
        <Textarea nativeID="description" size="lg">
          <TextareaInput
            value={form.values.description}
            onChangeText={form.handleChange("description")}
            onBlur={form.handleBlur("description")}
            nativeID="description"
            placeholder={t("general.description.placeholder")}
          />
        </Textarea>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{form.errors.description}</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl size="md">
        <FormControlLabel mb="$1">
          <FormControlLabelText>
            {t("general.birth.label")}
          </FormControlLabelText>
        </FormControlLabel>
        <Box
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              w: !birthDate && !birthDateValue ? "$full" : "$5/6",
              paddingRight: birthDate === null ? "$0" : "$2",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Modal isOpen={pickerShown} onClose={() => setPickerShown(false)}>
              <ModalBackdrop />
              <ModalContent>
                <DateTimePicker
                  locale={i18n.language}
                  value={birthDateValue ?? new Date()}
                  display="inline"
                  mode="date"
                  onChange={onBirthChange as any}
                />
              </ModalContent>
            </Modal>
            <Button
              variant="outline"
              width="100%"
              borderColor={"$borderDark400"}
              onPress={showPicker}
            >
              <Text>
                {birthDateValue
                  ? dayjs(birthDateValue).format("DD MMMM YYYY")
                  : t("general.birth.placeholder")}
              </Text>
            </Button>
          </Box>
          {(![null, ""].includes(birthDate) || !!birthDateValue) && (
            <Box
              sx={{
                w: "$1/6",
                paddingLeft: "$2",
              }}
            >
              <Button action="negative" onPress={resetBirthDate}>
                <BoxIcon name="trash" color="white" />
              </Button>
            </Box>
          )}
        </Box>
      </FormControl>
      <Button onPress={() => form.handleSubmit()}>
        <Loading color="$white" value={loading}>
          <Text color="$white">{t("general.submit")}</Text>
        </Loading>
      </Button>
    </VStack>
  );
};

export default AccountEditProfileForm;
