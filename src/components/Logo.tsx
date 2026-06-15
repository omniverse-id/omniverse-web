import React from 'react';
import newLogo from '@/assets/omniverse1-new.png';

interface LogoProps {
  size?: number;
  variant?: 'icon' | 'full';
  colorTheme?: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
}) => {
  return (
    <div className={`flex items-center select-none group ${className}`}>
      {/* Brand Image Logo (Horizontal/Widescreen) */}
      <img
        src={newLogo}
        alt="Omniverse One Logo"
        className="shrink-0 transition-all duration-300 transform group-hover:scale-105 object-contain h-10 sm:h-12 md:h-[52px]"
        style={{ width: 'auto' }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Logo;
