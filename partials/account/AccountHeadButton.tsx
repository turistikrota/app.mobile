import { Avatar, AvatarFallbackText, AvatarImage } from "@gluestack-ui/themed";
import { router } from "expo-router";
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
        <Pressable
          onPress={() => router.push("/panel")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!!profile ? (
            <Avatar size="sm" borderRadius="$full" bgColor="$coolGray200">
              <AvatarFallbackText
                sx={{
                  color: "$trueGray600",
                }}
              >
                {!!profile.fullName ? profile.fullName : profile.userName}
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
            <Avatar
              size="sm"
              bgColor="transparent"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BoxIcon name="user" width={26} height={26} />
            </Avatar>
          )}
        </Pressable>
      </AccountGuard.Optional>
    </AuthGuard.Optional>
  );
};

export default AccountHeadButton;
