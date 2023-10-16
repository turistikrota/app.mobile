import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Center,
  Divider,
  ScrollView,
  Text,
  View,
  useToken,
} from "@gluestack-ui/themed";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import ListLinkItem from "~components/ListLinkItem";
import { Services, apiUrl } from "~config/services";
import { useAlert } from "~hooks/alert";
import { httpClient } from "~http/client";
import LoadingListItem from "~partials/state/LoadingListItem";
import { RootState } from "~store";
import { reset as resetAccountStore } from "~store/account.store";
import { reset as resetAuthStore } from "~store/auth.store";

const AuthProtectedItems: React.FC = () => {
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
  const { t } = useTranslation("panel");
  const alert = useAlert();
  const dispatch = useDispatch();

  const logout = async () => {
    const res = await alert.confirm(t("logout.checkText"), {
      okText: t("logout.okButtonText"),
    });
    if (!res.confirmed) return;
    setLogoutLoading(true);
    httpClient
      .post(apiUrl(Services.Auth, "/logout"), null)
      .then((res) => {
        if (res.status === 200) {
          dispatch(resetAuthStore());
          dispatch(resetAccountStore());
        }
      })
      .catch((err) => {
        alert.alert(t("logout.error"));
      })
      .finally(() => {
        setLogoutLoading(false);
      });
  };

  return (
    <>
      <ListLinkItem href="/panel/devices" icon={<BoxIcon name="devices" />}>
        <Text>{t("devices")}</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/manage" icon={<BoxIcon name="lock" />}>
        <Text>{t("manage")}</Text>
      </ListLinkItem>
      <ListLinkItem
        href="/panel/change-password"
        icon={<BoxIcon name="shield" />}
      >
        <Text>{t("change-password")}</Text>
      </ListLinkItem>
      <ListLinkItem
        href="/panel/auth"
        disabled={logoutLoading}
        icon={<BoxIcon name="logout" />}
        onPress={logout}
      >
        <Text>{t("logout.button")}</Text>
      </ListLinkItem>
    </>
  );
};

const NoAuthProtectedItems: React.FC = () => {
  const { t } = useTranslation("panel");
  const iconColor = useToken("colors", "primary700");
  return (
    <>
      <ListLinkItem
        href="/panel/auth"
        sx={{
          bg: "$primary0",
          borderRadius: "$md",
          my: "$2",
          mx: "$2",
          py: "$1",
          pl: "$2",
          pr: "$1",
        }}
        iconColor={iconColor}
      >
        <Text
          sx={{
            color: "$primary700",
          }}
        >
          {t("login")}
        </Text>
      </ListLinkItem>
    </>
  );
};

const ProfileSelectedItems: React.FC = () => {
  const { t } = useTranslation("panel");
  const profile = useSelector((state: RootState) => state.account.profile);

  if (!profile) return <></>;

  return (
    <>
      <Center
        sx={{
          pt: "$2",
          mb: "$4",
        }}
      >
        <Avatar bgColor="$trueGray400" size="2xl" borderRadius="$full">
          <AvatarFallbackText>{profile.fullName}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: profile.avatarUrl,
            }}
          />
        </Avatar>
        <Text
          sx={{
            fontSize: "$lg",
            fontWeight: "bold",
            mt: "$2",
          }}
        >
          {profile.fullName}
        </Text>
        <Text
          sx={{
            fontSize: "$sm",
          }}
        >
          @{profile.userName}
        </Text>
      </Center>
      <ListLinkItem href="/panel/account/edit" icon={<BoxIcon name="edit" />}>
        <Text>{t("profile.edit")}</Text>
      </ListLinkItem>
      <ListLinkItem
        href="/panel/account/select"
        icon={<BoxIcon name="account" />}
      >
        <Text>{t("profile.all")}</Text>
      </ListLinkItem>
    </>
  );
};

const NoProfileSelectedItems: React.FC = () => {
  const iconColor = useToken("colors", "secondary700");
  const { t } = useTranslation("panel");
  return (
    <>
      <ListLinkItem
        href="/panel/account/select"
        sx={{
          bg: "$secondary0",
          borderRadius: "$md",
          my: "$2",
          mx: "$2",
          py: "$1",
          pl: "$2",
          pr: "$1",
        }}
        iconColor={iconColor}
      >
        <Text
          sx={{
            color: "$secondary700",
          }}
        >
          {t("profile.select")}
        </Text>
      </ListLinkItem>
    </>
  );
};

const PublicItems: React.FC = () => {
  const { t } = useTranslation("panel");

  const items = [
    {
      name: "vision",
      href: "/panel/vision",
    },
    {
      name: "terms-of-use",
      href: "/panel/help/termsOfUse",
    },
    {
      name: "privacy-note",
      href: "/panel/help/privacyNote",
    },
    {
      name: "personal-data",
      href: "/panel/help/privacyAndPersonalData",
    },
    {
      name: "about",
      href: "/panel/about",
    },
  ];
  return (
    <Box sx={{ px: "$2" }}>
      {items.map((i) => (
        <ListLinkItem key={i.name} href={i.href}>
          <Text>{t(i.name)}</Text>
        </ListLinkItem>
      ))}
    </Box>
  );
};

export default function PanelPage() {
  const authLoading = useSelector((state: RootState) => state.auth.loading);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const account = useSelector((state: RootState) => state.account);
  const isLoading = useMemo(
    () => authLoading || account.loading,
    [authLoading, account.loading]
  );
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
      }}
    >
      <ScrollView>
        {isLoading ? (
          <Box
            sx={{
              mb: "$4",
              pt: "$2",
            }}
          >
            <LoadingListItem />
          </Box>
        ) : isAuthenticated ? (
          <>
            {!!account.profile ? (
              <>
                <ProfileSelectedItems />
                <Divider
                  sx={{
                    my: "$2",
                  }}
                />
              </>
            ) : (
              <NoProfileSelectedItems />
            )}

            <AuthProtectedItems />
            <Divider
              sx={{
                my: "$2",
              }}
            />
          </>
        ) : (
          <NoAuthProtectedItems />
        )}
        <PublicItems />
      </ScrollView>
    </View>
  );
}
