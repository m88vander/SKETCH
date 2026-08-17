import React from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  variant?: 'base' | 'lead' | 'small'
  as?: 'p' | 'span' | 'div'
}

const variantClasses = {
  base: 'text-base leading-relaxed',
  lead: 'text-lg leading-relaxed font-medium',
  small: 'text-sm leading-relaxed',
}

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  variant = 'base',
  as = 'p',
}) => {
  const Component = as as React.ElementType

  return (
    <Component className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  )
}
