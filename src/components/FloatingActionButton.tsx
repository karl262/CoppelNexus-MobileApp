// src/components/FloatingActionButton.tsx
import { Pressable } from 'react-native';
import { Plus } from 'lucide-react-native';
import { router } from 'expo-router';
import { palette } from '@/theme/colors';

export default function FloatingActionButton() {
  return (
    <Pressable
      onPress={() => router.push('/(main)/registerClient')}
      className="absolute right-6 bottom-20 w-14 h-14 rounded-full items-center justify-center shadow-lg"
      style={{ backgroundColor: palette.primary }}
    >
      <Plus color="#fff" size={28} />
    </Pressable>
  );
}
