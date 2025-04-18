import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Pressable,
  Text,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Eye, EyeOff } from 'lucide-react-native';
import { palette } from '@/theme/colors';
import CustomInput from '@/components/CustomInput';

import logo from '~assets/images/oficialCoppelNexus.png';

export default function Login() {
  const [secure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#2E2E2E]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-white rounded-sm shadow-sm items-center px-6 py-10 m-2">
          <Image
            source={logo}
            className="w-32 h-32 mb-4 self-center"
            resizeMode="contain"
          />

          <Text className="text-xl font-bold text-center mb-1">
            ¡Hola de nuevo!
          </Text>
          <Text className="text-gray-500 text-center mb-5">
            Inicia sesión para ayudar emprendedores y recibir recompensas
          </Text>

          <CustomInput
            label="Número de colaborador"
            placeholder="Ej: 1234567890"
            keyboardType="number-pad"
          />

          <CustomInput
            label="Contraseña"
            placeholder="●●●●●●"
            secureTextEntry={secure}
            rightIcon={
              <Pressable onPress={() => setSecure(!secure)}>
                {secure ? (
                  <Eye className="text-gray-400" />
                ) : (
                  <EyeOff className="text-gray-400" />
                )}
              </Pressable>
            }
          />

          <View className="flex-row items-center my-2">
            <Checkbox
              value={remember}
              onValueChange={setRemember}
              color={remember ? palette.primary : undefined}
            />
            <Text className="ml-2 text-sm text-gray-600">Recordar sesión</Text>
          </View>

          <Pressable
            className="w-full py-3 rounded-full mt-4"
            style={{ backgroundColor: palette.primary }}
            onPress={() => console.log('TODO: autenticar')}
          >
            <Text className="text-white text-center font-semibold">
              Iniciar sesión
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
