import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { X, CheckCircle, AlertTriangle } from 'lucide-react-native';
import { palette } from '@/theme/colors';

interface AlertBannerProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
  duration?: number;
}

export default function AlertBanner({ type, message, onClose }: AlertBannerProps) {
  const isSuccess = type === 'success';
  const bgColor = isSuccess ? palette.success : palette.error;
  const Icon = isSuccess ? CheckCircle : AlertTriangle;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Icon size={20} color={palette.white} />
      <Text style={styles.message}>{message}</Text>
      {onClose && (
        <Pressable onPress={onClose}>
          <X size={20} color={palette.white} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,   
    paddingHorizontal: 16, 
    borderRadius: 8,       
    marginBottom: 16,
  },
  message: {
    flex: 1,
    color: palette.white,
    marginHorizontal: 8,
    fontSize: 14,          
    lineHeight: 22,
  },
});
