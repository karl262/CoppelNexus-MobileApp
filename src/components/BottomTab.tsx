import { View, Pressable, Text } from 'react-native';
import {
    Home,
    ShoppingBag,
    Gift,
    BarChart2,
    type LucideIcon,
} from 'lucide-react-native';
import { palette } from '@/theme/colors';
import { useBottomTab, TabKey } from '@/hooks/useBottomTap';
import { router } from 'expo-router';

const handleHomePress = () => router.push('/(main)/home');
const handleRedeemPress = () => router.push('/(main)/redeem');
const handleEarnPress = () => router.push('/(main)/earn');
const handleProgressPress = () => router.push('/(main)/progress');

type TabItem = {
    key: TabKey;
    label: string;
    icon: LucideIcon;
    onPress: () => void;
};

export default function BottomTab() {
    const { current, setCurrent } = useBottomTab();

    const tabs: TabItem[] = [
        { key: 'home', label: 'Inicio', icon: Home, onPress: handleHomePress },
        { key: 'redeem', label: 'Canjear', icon: ShoppingBag, onPress: handleRedeemPress },
        { key: 'earn', label: 'Ganar', icon: Gift, onPress: handleEarnPress },
        { key: 'progress', label: 'Progreso', icon: BarChart2, onPress: handleProgressPress },
    ];

    return (
        <View className="flex-row justify-around items-center py-3 bg-white border-t border-gray-200">
            {tabs.map(({ key, label, icon: Icon, onPress }) => (
                <Pressable
                    key={key}
                    className="items-center"
                    onPress={() => {
                        setCurrent(key);
                        onPress();
                    }}
                >
                    <Icon
                        size={22}
                        color={current === key ? palette.primary : '#777'}
                    />
                    <Text
                        className={`text-xs mt-1 ${current === key ? 'text-primary' : 'text-[#777]'
                            }`}
                    >
                        {label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}
