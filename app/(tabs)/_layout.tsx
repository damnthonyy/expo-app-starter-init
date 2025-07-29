import { Tabs } from "expo-router";
import CustomTabBar from "../../components/CustomTabBar";
import "../global.css";

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Home"
                }} 
            />
            <Tabs.Screen 
                name="setting" 
                options={{
                    title: "Settings"
                }} 
            />
            <Tabs.Screen 
                name="store" 
                options={{
                    title: "Store"
                }} 
            />
        </Tabs>
    );
}