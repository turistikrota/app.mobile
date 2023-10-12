import {
  Avatar,
  AvatarFallbackText,
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
          alert.alert(t("logout.success"));
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
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="user-plus" />}>
        <Text>{t("invite")}</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="lock" />}>
        <Text>{t("manage")}</Text>
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
          mt: "$2",
          pt: "$1",
          pb: "$1",
          mb: "$2",
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
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="profile" />}>
        <Text>{t("profile.view")}</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="edit" />}>
        <Text>{t("profile.edit")}</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="account" />}>
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
        href="/panel/auth"
        sx={{
          bg: "$secondary0",
          borderRadius: "$md",
          mt: "$2",
          pt: "$1",
          pb: "$1",
          mb: "$2",
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
      name: "settings",
      icon: "settings",
      href: "/panel/auth",
    },
    {
      name: "country",
      icon: "world",
      href: "/panel/auth",
    },
    {
      name: "help",
      icon: "question",
      href: "/panel/help",
    },
  ];
  return (
    <>
      {items.map((i) => (
        <ListLinkItem
          key={i.name}
          href={i.href}
          icon={<BoxIcon name={i.icon} />}
        >
          <Text>{t(i.name)}</Text>
        </ListLinkItem>
      ))}
    </>
  );
};

export default function PanelPage() {
  const auth = useSelector((state: RootState) => state.auth);
  const account = useSelector((state: RootState) => state.account);
  const isLoading = useMemo(
    () => auth.loading || account.loading,
    [auth.loading, account.loading]
  );
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
        px: "$2",
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
        ) : auth.isAuthenticated ? (
          <>
            {!!account.profile ? (
              <ProfileSelectedItems />
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
