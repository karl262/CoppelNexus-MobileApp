// WelcomeHeader.tsx
import React, { useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import { UserPlus, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { router } from 'expo-router';
import { palette } from '@/theme/colors';
import { useWelcomeCarousel } from '@/hooks/useWelcomeCarousel';
import { NavigationRoutes } from '@/types/navigation';
import { typography } from '@/theme/typography';

interface Props {
  userName: string;
  pending: number;
}

type Slide = {
  backgroundColor: string;
  title: string;
  subtitle?: string;
  actionLabel: string;
  actionRoute: NavigationRoutes;
};

export default function WelcomeHeader({ userName, pending }: Props) {
  const { index, onMomentumScrollEnd, SCREEN_WIDTH } =
    useWelcomeCarousel();

  const flatListRef = useRef<FlatList<Slide>>(null);

  const slides: Slide[] = [
    {
      backgroundColor: palette.primary,
      title: `¡Hola, ${userName}!`,
      subtitle: `Hoy puedes ayudar a ${pending} microempresarios en tu ruta`,
      actionLabel: 'Registrar microempresario',
      actionRoute: '/(main)/registerClient',
    },
    {
      backgroundColor: palette.success,
      title: '¡Solo te faltan 3 llaves!',
      subtitle: 'Y podrás canjear la TV Samsung 45’',
      actionLabel: 'Ver beneficio',
      actionRoute: '/(main)/redeem',
    },
    {
      backgroundColor: palette.error,
      title: 'Conseguiste el puesto 4 de la semana',
      subtitle: 'con 18 referencias',
      actionLabel: 'Ver ranking',
      actionRoute: '/(main)/progress',
    },
  ];

  const goPrev = () => {
    if (index > 0) {
      flatListRef.current?.scrollToIndex({ index: index - 1 });
    }
  };

  const goNext = () => {
    if (index < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: index + 1 });
    }
  };

  const renderSlide = ({ item }: ListRenderItemInfo<Slide>) => (
    <View
      style={{ width: SCREEN_WIDTH, backgroundColor: item.backgroundColor }}
      className="p-6"
    >
      <Text style={[styles.title, { color: palette.white }]}>
        {item.title}
      </Text>
      {item.subtitle && (
        <Text className="text-white text-base mt-1">
          {item.subtitle}
        </Text>
      )}
      <TouchableOpacity
        className="mt-2 flex-row items-center"
        onPress={() => router.push(item.actionRoute as any)}
      >
        <Text className="text-white text-base font-semibold">
          {item.actionLabel}
        </Text>
        <UserPlus size={24} color={palette.white} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="mb-5">
      <View style={{ width: SCREEN_WIDTH, position: 'relative' }}>
        {/* Flecha izquierda */}
        <TouchableOpacity
          style={[styles.arrowButton, { left: 10 }]}
          onPress={goPrev}
          disabled={index === 0}
        >
          <ChevronLeft
            size={24}
            color={index === 0 ? palette.gray400 : palette.white}
          />
        </TouchableOpacity>

        {/* Flecha derecha */}
        <TouchableOpacity
          style={[styles.arrowButton, { right: 10 }]}
          onPress={goNext}
          disabled={index === slides.length - 1}
        >
          <ChevronRight
            size={24}
            color={
              index === slides.length - 1 ? palette.gray400 : palette.white
            }
          />
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          keyExtractor={(_, i) => String(i)}
          renderItem={renderSlide}
        />
      </View>

      {/* Dots de paginación */}
      <View className="flex-row justify-center items-center mt-2 space-x-2">
        {slides.map((_, i) => (
          <View
            key={i}
            className={`w-2 h-2 rounded-full ${
              index === i ? 'bg-white' : 'bg-white/60'
            }`}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.size.h2.fontSize, // p.ej. 24px
    fontWeight: 'bold',
    fontFamily: typography.family.primary,
  },
  icon: {
    marginLeft: 8,
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    marginTop: -12,
    zIndex: 10,
    padding: 8,
  },
});
