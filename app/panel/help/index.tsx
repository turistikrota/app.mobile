import { ScrollView, Text, View } from "@gluestack-ui/themed";
import React from "react";
import ListLinkItem from "~components/ListLinkItem";

export default function HelpListPage() {
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
        px: "$2",
      }}
    >
      <ScrollView>
        <ListLinkItem href="/panel/help/privacyAndPersonalData">
          <Text>KVKK</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/help/privacyNote">
          <Text>Privacy Note</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/help/termsOfUse">
          <Text>Kullanım Koşulları</Text>
        </ListLinkItem>
      </ScrollView>
    </View>
  );
}
