import { ScrollView, Text, View } from "@gluestack-ui/themed";
import React from "react";
import ListLinkItem from "~components/ListLinkItem";

export default function AgreementListPage() {
  return (
    <View
      sx={{
        backgroundColor: "$white",
        h: "$full",
        px: "$2",
      }}
    >
      <ScrollView>
        <ListLinkItem href="/panel/agreement/privacyAndPersonalData">
          <Text>KVKK</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/agreement/privacyNote">
          <Text>Privacy Note</Text>
        </ListLinkItem>
        <ListLinkItem href="/panel/agreement/termsOfUse">
          <Text>Kullanım Koşulları</Text>
        </ListLinkItem>
      </ScrollView>
    </View>
  );
}
