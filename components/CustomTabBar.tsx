import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { House, Settings, Store } from 'lucide-react-native';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export default function CustomTabBar({ state, descriptors, navigation }: TabBarProps) {
  return (
    <View className="flex-row bg-white/95 mx-4 mb-5 rounded-3xl h-20 pb-2.5 pt-2.5 shadow-lg border border-white/30">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIcon = () => {
          const iconColor = isFocused ? '#6366f1' : '#94a3b8';
          const iconSize = 24;
          
          switch (route.name) {
            case 'index':
              return <House color={iconColor} size={iconSize} />;
            case 'setting':
              return <Settings color={iconColor} size={iconSize} />;
            case 'store':
              return <Store color={iconColor} size={iconSize} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            className="flex-1 items-center justify-center py-2"
          >
            <View className="items-center">
              {getIcon()}
              <Text 
                className={`text-xs font-semibold mt-1 ${
                  isFocused ? 'text-indigo-500' : 'text-slate-400'
                }`}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
} 