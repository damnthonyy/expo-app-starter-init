import { Tabs } from "expo-router";
import { House, Settings, Store } from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: "#6366f1",
                tabBarInactiveTintColor: "#94a3b8",
                tabBarStyle: {
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderTopWidth: 0,
                    borderTopColor: "transparent",
                    marginHorizontal: 16,
                    marginBottom: 20,
                    borderRadius: 25,
                    height: 80,
                    paddingBottom: 10,
                    paddingTop: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 12,
                    elevation: 8,
                    borderWidth: 1,
                    borderColor: "rgba(255, 255, 255, 0.3)",
                },
                tabBarItemStyle: {
                    paddingVertical: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                    marginTop: 4,
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