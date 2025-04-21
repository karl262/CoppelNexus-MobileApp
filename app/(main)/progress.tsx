import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNavbar from '@/components/TopNavbar';
import BottomTab from '@/components/BottomTab';
import ProgressTabs from '@/components/ProgressTabs';

export default function ProgressScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TopNavbar title="Progreso" />
      <ProgressTabs />
      <BottomTab />
    </SafeAreaView>
  );
}
