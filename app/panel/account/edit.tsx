import { ScrollView, VStack, View } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Services, apiUrl } from "~config/services";
import AccountGuard from "~guards/account";
import { httpClient } from "~http/client";
import AccountEditProfileActivationForm from "~partials/account/AccountEditProfileActiviationForm";
import AccountEditProfileCompletedRate from "~partials/account/AccountEditProfileCompletedRate";
import AccountEditProfileDeletionForm from "~partials/account/AccountEditProfileDeletionForm";
import AccountEditProfileForm from "~partials/account/AccountEditProfileForm";
import AccountEditProfilePictureSection from "~partials/account/AccountEditProfilePictureSection";
import LoadingFullScreen from "~partials/state/LoadingFullScreen";
import { RootState } from "~store";
import { Account, isAccount } from "~types/account";

export default function EditAccountPage() {
  const { t } = useTranslation("account");
  const profile = useSelector((state: RootState) => state.account.profile);
  const [details, setDetails] = useState<Account | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    setIsLoading(true);
    httpClient
      .get(apiUrl(Services.Account, `/@${profile?.userName}/my`))
      .then((res) => {
        if (isAccount(res.data)) {
          setDetails(res.data);
        }
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onActivationChange = (val: boolean) => {
    if (details) {
      setDetails({
        ...details,
        isActive: val,
      });
    }
  };

  const refetch = () => {
    setTimeout(() => {
      fetchProfile();
    }, 1000);
  };
  return (
    <AccountGuard.SelectionRequired>
      <View
        sx={{
          height: "100%",
          backgroundColor: "$white",
          px: "$2",
        }}
      >
        <ScrollView>
          {isLoading && <LoadingFullScreen />}
          {!isLoading && details && (
            <VStack space="2xl">
              <AccountEditProfilePictureSection
                avatar={details.avatarUrl}
                fullName={details.fullName}
                userName={details.userName}
                onUpdate={refetch}
              />
              <AccountEditProfileCompletedRate value={details.completedRate} />
              <AccountEditProfileForm />
              <AccountEditProfileActivationForm
                isActive={details.isActive}
                userName={details.userName}
                onChange={onActivationChange}
              />
              <AccountEditProfileDeletionForm userName={details.userName} />
            </VStack>
          )}
        </ScrollView>
      </View>
    </AccountGuard.SelectionRequired>
  );
}
