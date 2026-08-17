import React from 'react'

interface CTAProps {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses = {
  primary: 'bg-black text-white hover:bg-gray-900',
  secondary: 'bg-transparent text-black border border-black hover:bg-gray-50',
}

export const CTA: React.FC<CTAProps> = ({
  href,
  children,
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`inline-block font-medium transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
