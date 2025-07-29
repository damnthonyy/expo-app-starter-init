import { View, Text, StyleSheet } from "react-native";

export default function Store() {
    return(
        <View className="flex-1 items-center justify-center bg-[#f8fafc] gap-4">
            <Text className="text-[32px] font-bold text-[#1e293b]">Store</Text>
            <Text className="text-[16px] text-[#64748b]">Bienvenue dans notre boutique</Text>
        </View>
    )
}

