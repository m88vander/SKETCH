import React from 'react'

interface LogoProps {
  animated?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'text-3xl',
  md: 'text-5xl md:text-6xl',
  lg: 'text-7xl md:text-8xl',
}

export const Logo: React.FC<LogoProps> = ({
  size = 'lg',
  animated = false,
  className = '',
}) => {
  return (
    <div
      className={`font-display font-bold tracking-tighter ${sizeClasses[size]} ${className} ${
        animated ? 'animate-pulse' : ''
      }`}
    >
      SKETCH
    </div>
  )
}
