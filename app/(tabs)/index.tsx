import { View, Text, StyleSheet } from "react-native";



export default function Home() {
    return(
        <View className="flex-1 items-center justify-center bg-[#f8fafc] gap-4">
            <Text className="text-[32px] font-bold text-[#1e293b]">Accueil</Text>
            <Text className="text-[16px] text-[#64748b]">Bienvenue sur la page d'accueil.</Text>
        </View>
    )
}

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#64748b",
    }
}) */
