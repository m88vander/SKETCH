import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  size?: 'sm' | 'base' | 'lg'
}

const sizeClasses = {
  sm: 'py-8 md:py-12',
  base: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  size = 'base',
}) => {
  return (
    <section id={id} className={`${sizeClasses[size]} ${className}`}>
      {children}
    </section>
  )
}
