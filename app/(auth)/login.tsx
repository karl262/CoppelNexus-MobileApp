import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Pressable, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Eye, EyeOff } from 'lucide-react-native';
import { palette } from '@/theme/colors';
import CustomInput from '@/components/CustomInput';
import logoCoppel from '~assets/images/logos/LOGO_COPPEL_AZUL-09.png';
import { router } from 'expo-router';

export default function Login() {
  const [secure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);
  const handleLogin = () => {
    router.replace('/(main)/home');
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F1F4FA]">
      <ScrollView className="flex-1 px-6 pt-10" keyboardShouldPersistTaps="handled">
        <View className="bg-white rounded-2xl shadow-md px-6 py-10">
          <Image source={logoCoppel} className="w-32 h-32 mb-6 self-center" resizeMode="contain" />
          <Text className="text-[24px] leading-8 font-bold text-center text-[#1B1A16] mb-2">¡Hola de nuevo!</Text>
          <Text className="text-[#595959] text-center text-[16px] leading-6 mb-6">Inicia sesión para ayudar emprendedores y recibir recompensas</Text>
          <CustomInput label="Número de colaborador" placeholder="Ej: 1234567890" keyboardType="number-pad" />
          <CustomInput label="Contraseña" placeholder="●●●●●●" secureTextEntry={secure} rightIcon={<Pressable onPress={() => setSecure(!secure)}>{secure ? <Eye className="text-gray-400" /> : <EyeOff className="text-gray-400" />}</Pressable>} />
          <View className="flex-row items-center my-4">
            <Checkbox value={remember} onValueChange={setRemember} color={remember ? palette.primary : undefined} />
            <Text className="ml-2 text-[14px] text-[#595959]">Recordar sesión</Text>
          </View>
          <Pressable className="w-full py-3 rounded-full" style={{ backgroundColor: palette.primary }} onPress={() => handleLogin()}>
            <Text className="text-white text-center font-semibold text-[16px]">Iniciar sesión</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
