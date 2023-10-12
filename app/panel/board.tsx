import {
  Avatar,
  AvatarFallbackText,
  Center,
  Divider,
  ScrollView,
  Text,
  View,
} from "@gluestack-ui/themed";
import React from "react";
import { useTranslation } from "react-i18next";
import BoxIcon from "~assets/Icons/BoxIcon";
import ListLinkItem from "~components/ListLinkItem";

export default function PanelPage() {
  const { t } = useTranslation("panel");
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
        px: "$2",
      }}
    >
      <ScrollView>
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
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="map" />}>
          <Text>Auth</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="profile" />}>
          <Text>Profilimi Görüntüle</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="edit" />}>
          <Text>Profilimi Düzenle</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="account" />}>
          <Text>Tüm Profillerim</Text>
        </ListLinkItem>
        <Divider
          sx={{
            my: "$2",
          }}
        />
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="lock" />}>
          <Text>Hesabını Yönet</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="settings" />}>
          <Text>Ayarlar</Text>
        </ListLinkItem>
        <Divider
          sx={{
            my: "$2",
          }}
        />

        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="user-plus" />}>
          <Text>Arkadaşını Davet Et</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="logout" />}>
          <Text>Çıkış Yap</Text>
        </ListLinkItem>
        <Divider
          sx={{
            my: "$2",
          }}
        />
        <ListLinkItem href="/panel/auth" icon={<BoxIcon name="world" />}>
          <Text>Ülke Değiştir</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/help" icon={<BoxIcon name="question" />}>
          <Text>Yardım</Text>
        </ListLinkItem>
      </ScrollView>
    </View>
  );
}
