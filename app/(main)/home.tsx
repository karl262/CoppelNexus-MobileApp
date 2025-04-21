import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text } from 'react-native';
import { useChallenge } from '@/hooks/useChallenge';
import WelcomeHeader from '@/components/WelcomeHeader';
import ChallengeCard from '@/components/ChallengeCard';
import TopNavbar from '@/components/TopNavbar';
import FloatingActionButton from '@/components/FloatingActionButton';
import BottomTab from '@/components/BottomTab';

export default function Home() {
    const challenges = useChallenge();
    return (
        <SafeAreaView className="flex-1 bg-[#F1F4FA] relative">
            <TopNavbar />
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }}>
                <WelcomeHeader userName="Carlos" pending={3} />
                <View className="px-6">
                    <Text className="text-2xl font-bold mb-8">Desafíos activos</Text>
                    {challenges.map((d) => (
                        <ChallengeCard key={d.id} title={d.title} completed={d.completed} total={d.total} reward={d.reward} />
                    ))}
                </View>
            </ScrollView>
            <FloatingActionButton />
            <BottomTab />
        </SafeAreaView>
    );
}
