import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

// Props for the BaseButton component
interface BaseButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'flashy';
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

// BaseButton component
const BaseButton: React.FC<BaseButtonProps> = ({ 
  variant = 'primary', 
  title, 
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
      <Text className={textClasses[variant]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
