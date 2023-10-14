import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";
import { Link, router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import AccountGuard from "~guards/account";
import AuthGuard from "~guards/auth";
import { RootState } from "~store";

const AccountHeadButton: React.FC = () => {
  const profile = useSelector((state: RootState) => state.account.profile);
  return (
    <AuthGuard.Optional>
      <AccountGuard.Optional>
        <Link href="/panel">
          <Pressable onPress={() => router.push("/panel")}>
            {!!profile ? (
              <Avatar size="sm" borderRadius="$full" bgColor="$coolGray200">
                <AvatarFallbackText
                  sx={{
                    color: "$trueGray600",
                  }}
                >
                  {profile.fullName}
                </AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: profile.avatarUrl,
                  }}
                  sx={{
                    borderRadius: "$full",
                  }}
                />
              </Avatar>
            ) : (
              <BoxIcon name="user" />
            )}
          </Pressable>
        </Link>
      </AccountGuard.Optional>
    </AuthGuard.Optional>
  );
};

export default AccountHeadButton;
