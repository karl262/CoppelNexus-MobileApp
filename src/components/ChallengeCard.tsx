import { View, Text } from 'react-native';

interface Props { title: string; completed: number; total: number; reward: string; }

export default function ChallengeCard({ title, completed, total, reward }: Props) {
    const percent = (completed / total) * 100;
    return (
        <View className="bg-white p-4 mb-3 border border-[#E0E0E0]">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-[14px] font-semibold text-[#1B1A16]">{title}</Text>
                <View className="bg-[#FFDD35] rounded-full px-2 py-1">
                    <Text className="text-xs font-semibold text-[#1B1A16]">{reward}</Text>
                </View>
            </View>
            <View className="h-2 bg-[#E0E0E0] rounded-full overflow-hidden">
                <View className="h-full bg-[#006FB9] rounded-full" style={{ width: `${percent}%` }} />
            </View>
            <Text className="text-[12px] text-[#595959] mt-1">{completed}/{total} completados</Text>
        </View>
    );
}