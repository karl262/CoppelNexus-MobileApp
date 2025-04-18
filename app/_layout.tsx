import { Stack } from "expo-router";
import "global.css";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}
      />
      <StatusBar style="light" />
    </>
  );
}
