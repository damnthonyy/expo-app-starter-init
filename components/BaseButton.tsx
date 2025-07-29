import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';

// Props for the BaseButton component
interface BaseButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'flashy';
  title?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onPress: () => void;
}

// BaseButton component
const BaseButton: React.FC<BaseButtonProps> = ({ 
  variant = 'primary', 
  title, 
  icon,
  className = '',
  disabled = false,
  onPress,
  ...props 
}) => {
  const baseClasses = 'px-3 py-5 rounded-[12px] flex-row justify-center items-center w-[350px]';
  
  const variantClasses = {
    primary: 'bg-primary active:bg-primary',
    secondary: 'bg-black active:bg-black',
    flashy: 'bg-flashy active:bg-flashy'
  };

  const textClasses = {
    primary: 'text-black font-semibold text-[16px]',
    secondary: 'text-white font-semibold text-[16px]',
    flashy: 'text-black font-semibold text-[16px]'
  };

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      activeOpacity={0.8}
      onPress={onPress}
      {...props}
    >
      <View className="flex-row items-center justify-center gap-2">
        {icon && (
          <View className="flex items-center justify-center">
            {icon}
          </View>
        )}
        {title && (
          <Text className={textClasses[variant]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BaseButton;
