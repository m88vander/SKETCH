import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'base' | 'lg'
}

const sizeClasses = {
  sm: 'section-sm',
  base: 'section',
  lg: 'section-lg',
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  size = 'base',
}) => {
  return (
    <section className={`${sizeClasses[size]} ${className}`}>
      {children}
    </section>
  )
}
