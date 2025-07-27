import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Paramètres</Text>
            <Text style={styles.subtitle}>Gérez vos paramètres ici</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
