import { Tabs } from "expo-router";
import { House, Settings, Store } from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: "#666666",
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    borderTopWidth: 1,
                    borderTopColor: "#e0e0e0",
                },
                headerShown: false
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Home", 
                    tabBarIcon: ({color, size}) => (
                        <House color={color} size={size} />
                    )
                }} 
            />
            <Tabs.Screen 
                name="setting" 
                options={{
                    title: "Settings", 
                    tabBarIcon: ({color, size}) => (
                        <Settings color={color} size={size} />
                    )
                }} 
            />
            <Tabs.Screen 
                name="store" 
                options={{
                    title: "Store", 
                    tabBarIcon: ({color, size}) => (
                        <Store color={color} size={size} />
                    )
                }} 
            />
        </Tabs>
    );
}