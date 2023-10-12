import { ScrollView, View } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Services, apiUrl } from "~config/services";
import AccountGuard from "~guards/account";
import { httpClient } from "~http/client";
import AccountEditProfileCompletedRate from "~partials/account/AccountEditProfileCompletedRate";
import AccountEditProfilePictureSection from "~partials/account/AccountEditProfilePictureSection";
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
          {details && (
            <>
              <AccountEditProfilePictureSection
                avatar={details.avatarUrl}
                fullName={details.fullName}
                userName={details.userName}
                onUpdate={refetch}
              />
              <AccountEditProfileCompletedRate value={details.completedRate} />
            </>
          )}
        </ScrollView>
      </View>
    </AccountGuard.SelectionRequired>
  );
}
