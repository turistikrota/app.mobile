import {
  Avatar,
  AvatarFallbackText,
  Center,
  Divider,
  ScrollView,
  Text,
  View,
  useToken,
} from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import ListLinkItem from "~components/ListLinkItem";
import { RootState } from "~store";

const AuthProtectedItems: React.FC = () => {
  return (
    <>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="user-plus" />}>
        <Text>Arkadaşını Davet Et</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="lock" />}>
        <Text>Hesabını Yönet</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="logout" />}>
        <Text>Çıkış Yap</Text>
      </ListLinkItem>
    </>
  );
};

const NoAuthProtectedItems: React.FC = () => {
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
          Giriş Yap
        </Text>
      </ListLinkItem>
    </>
  );
};

const ProfileSelectedItems: React.FC = () => {
  return (
    <>
      <Center
        sx={{
          pt: "$2",
          mb: "$4",
        }}
      >
        <Avatar bgColor="$trueGray400" size="2xl" borderRadius="$full">
          <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
        </Avatar>
        <Text
          sx={{
            fontSize: "$lg",
            fontWeight: "bold",
            mt: "$2",
          }}
        >
          John Doe
        </Text>
        <Text
          sx={{
            fontSize: "$sm",
          }}
        >
          @johndoe
        </Text>
      </Center>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="profile" />}>
        <Text>Profilimi Görüntüle</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="edit" />}>
        <Text>Profilimi Düzenle</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="account" />}>
        <Text>Tüm Profillerim</Text>
      </ListLinkItem>
    </>
  );
};

const NoProfileSelectedItems: React.FC = () => {
  const iconColor = useToken("colors", "secondary700");
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
          Profil Seç
        </Text>
      </ListLinkItem>
    </>
  );
};

const PublicItems: React.FC = () => {
  return (
    <>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="settings" />}>
        <Text>Ayarlar</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/auth" icon={<BoxIcon name="world" />}>
        <Text>Ülke Değiştir</Text>
      </ListLinkItem>
      <ListLinkItem href="/panel/help" icon={<BoxIcon name="question" />}>
        <Text>Yardım</Text>
      </ListLinkItem>
    </>
  );
};

export default function PanelPage() {
  const { t } = useTranslation("panel");
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
        px: "$2",
      }}
    >
      <ScrollView>
        {auth.isAuthenticated ? (
          <>
            <NoProfileSelectedItems />
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
