import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  ScrollView,
  View,
  useToken,
} from "@gluestack-ui/themed";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import { Services, apiUrl } from "~config/services";
import { AccountListItem, isAccountListResponse } from "~hooks/account";
import { httpClient } from "~http/client";
import AccountSelectionCard from "~partials/account/AccountSelectionCard";
import LoadingListItem from "~partials/state/LoadingListItem";
import { setProfile } from "~store/account.store";

export default function SelectAccountPage() {
  const { t } = useTranslation("account");
  const gray = useToken("colors", "trueGray600");
  const [accounts, setAccounts] = useState<AccountListItem[]>([]);
  const [selectionAccount, setSelectionAccount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    httpClient
      .get(apiUrl(Services.Account, "/"))
      .then((res) => {
        if (isAccountListResponse(res.data)) {
          setAccounts(res.data);
        }
      })
      .catch((err: any) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onProfileSelect = (item: AccountListItem) => {
    setSelectionAccount(item.userName);
    httpClient
      .put(apiUrl(Services.Account, `/@${item.userName}/select`))
      .then((res) => {
        if (res.status === 200) {
          Haptics.selectionAsync();
          dispatch(setProfile(item));
          router.push("/panel/board");
        }
      })
      .catch((err) => {})
      .finally(() => {
        setSelectionAccount("");
      });
  };

  return (
    <View
      sx={{
        height: "100%",
        backgroundColor: "$white",
        p: "$2",
      }}
    >
      <ScrollView>
        {isLoading ? (
          <LoadingListItem />
        ) : (
          <>
            {accounts.map((account) => (
              <AccountSelectionCard
                key={account.userName}
                icon={
                  <Avatar size="md" borderRadius="$sm" bgColor="$coolGray200">
                    <AvatarFallbackText
                      sx={{
                        color: "$trueGray600",
                      }}
                    >
                      {account.fullName}
                    </AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: account.avatarUrl,
                      }}
                      sx={{
                        borderRadius: "$sm",
                      }}
                    />
                  </Avatar>
                }
                disabled={selectionAccount === account.userName}
                onPress={() => onProfileSelect(account)}
                userName={`@${account.userName}`}
                fullName={account.fullName}
                progress={account.completedRate}
              />
            ))}
            <AccountSelectionCard
              icon={
                <Avatar size="md" borderRadius="$sm" bgColor="transparent">
                  <BoxIcon color={gray} name="plus" width={40} height={40} />
                </Avatar>
              }
              onPress={() => router.push("/panel/account/create")}
              userName={t("new")}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
