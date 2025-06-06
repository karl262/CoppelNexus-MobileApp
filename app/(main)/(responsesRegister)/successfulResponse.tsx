import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import AlertBanner from '@/components/AlertBanner';
import BottomTab from '@/components/BottomTab';
import { palette } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { ArrowLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Params {
  status: 'success' | 'error';
  payload: string;
}



export default function ReferralResult() {
  const { status, payload } = useLocalSearchParams<Params>();
  let data: Record<string, string> = {};

  try {
    data = JSON.parse(payload);
  } catch {
    console.log('Error al parsear el payload:', payload);
  }

  const isSuccess = status === 'success';

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.safe}>
      <View className="flex-row items-center px-4 bg-primary" style={{ paddingVertical: 12 }}>
        <Pressable onPress={() => router.push('/(main)/')}>
          <ArrowLeft color={palette.white} size={30} />
        </Pressable>
        <Text className="flex-1 font-bold text-center ms-2" style={{ color: palette.white, fontSize: 22 }}>
           {data.businessName}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <AlertBanner
          type={status}
          message={
            isSuccess
              ? 'Negocio referido exitosamente.'
              : 'Ocurrió un error al referir el negocio, inténtalo nuevamente o contacta al soporte.'
          }
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{data.businessName ?? '—'}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Propietario:</Text>
            <Text style={styles.value}>{`${data.ownerName ?? ''} ${data.ownerLastName ?? ''}`.trim()}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Teléfono:</Text>
            <Text style={styles.value}>{data.phone ?? '—'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Tipo:</Text>
            <Text style={styles.value}>{data.businessType ?? '—'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Fecha de registro:</Text>
            <Text style={styles.value}>{data.registeredAt ?? '—'}</Text>
          </View>

          {data.address && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ubicación</Text>
              <Text style={styles.value}>{data.address}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* BottomTab */}
      <BottomTab />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: palette.gray100,
    paddingTop: 0,
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: palette.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: palette.black,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: typography.size.h3.fontSize,
    fontFamily: typography.family.primary,
    fontWeight: '700',
    marginBottom: 12,
    color: palette.textPrimary,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: 120,
    fontSize: typography.size.body.fontSize,
    fontWeight: '600',
    color: palette.textSecondary,
  },
  value: {
    flex: 1,
    fontSize: typography.size.body.fontSize,
    color: palette.textPrimary,
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: typography.size.subtitle1.fontSize,
    fontWeight: '600',
    color: palette.textPrimary,
    marginBottom: 4,
  },
});
