import { Slot } from "expo-router";
import React from "react";
import AuthGuard from "../../guards/auth";

export default function AuthLayout() {
  return (
    <AuthGuard.Forbidden>
      <Slot />
    </AuthGuard.Forbidden>
  );
}
