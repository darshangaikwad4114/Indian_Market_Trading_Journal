import React from 'react';
import { TrendingUp } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: {
      icon: 'h-4 w-4',
      container: 'p-1',
      text: 'text-sm'
    },
    md: {
      icon: 'h-6 w-6',
      container: 'p-2',
      text: 'text-xl'
    },
    lg: {
      icon: 'h-8 w-8',
      container: 'p-3',
      text: 'text-2xl'
    },
    xl: {
      icon: 'h-12 w-12',
      container: 'p-4',
      text: 'text-3xl'
    }
  };

  const sizes = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl ${sizes.container} shadow-lg`}>
        <TrendingUp className={`${sizes.icon} text-white`} />
      </div>
      {showText && (
        <span className={`font-bold text-gray-900 dark:text-white ${sizes.text}`}>
          MyTradeDiary
        </span>
      )}
    </div>
  );
};

export default Logo;
