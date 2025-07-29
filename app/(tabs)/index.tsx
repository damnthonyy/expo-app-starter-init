import { View, Text } from "react-native";
import BaseButton from "../../components/BaseButton";


export default function Home() {

    const handlePress = () => {
        alert("Button pressed");
    }

    return (
        <View className="flex-1 items-center justify-center bg-slate-50 gap-4">
            <Text className="text-3xl font-bold text-slate-800 mb-2">
                Accueil
            </Text>
            <Text className="text-[16px] text-slate-500">
                Bienvenue sur la page d'accueil.
            </Text>
            <BaseButton variant="flashy" disabled={false} title="Se connecter" onPress={handlePress} />
        </View>
    );
}
