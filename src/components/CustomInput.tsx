import { TextInput, View, Text } from 'react-native';
import { ReactNode } from 'react';

interface Props extends React.ComponentProps<typeof TextInput> {
  label: string;
  rightIcon?: ReactNode;
}

export default function CustomInput({ label, rightIcon, ...props }: Props) {
  return (
    <View className="w-full mb-4">
      <Text className="text-gray-700 mb-1">{label}</Text>

      <View className="flex-row items-center border border-gray-300 rounded-lg px-3">
        <TextInput
          className="flex-1 py-3"
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        {rightIcon}
      </View>
    </View>
  );
}
