import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { palette } from '@/theme/colors';

import logo from '~assets/images/oficialCoppelNexus.png';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
      router.replace('/(auth)/login');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: palette.accent }}
    >

      <Image source={logo} className="w-48 h-48" resizeMode="contain" />
    </View>
  );
}
