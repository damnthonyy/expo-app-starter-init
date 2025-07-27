import { View, Text,StyleSheet } from "react-native";

export default function store() {
    return(
        <View style={styles.container}>
            <Text>store</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})