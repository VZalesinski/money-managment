import { Stack } from "expo-router/stack";
import { TamaguiProvider, Theme } from 'tamagui'
import { customConfig } from "@/themes/tamagui.config";
import React from "react";


export default function RootLayout() {
  return (
    <TamaguiProvider config={customConfig}>
      <Theme name={"white"}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Theme>
    </TamaguiProvider>);
}
