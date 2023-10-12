import { Slot } from "expo-router";
import React from "react";
import AccountGuard from "~guards/account";

export default function AccountLayout() {
  return (
    <AccountGuard.Required>
      <Slot />
    </AccountGuard.Required>
  );
}
