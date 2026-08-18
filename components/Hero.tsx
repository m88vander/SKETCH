import React from 'react'

interface HeroProps {
  children: React.ReactNode
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ children, className = '' }) => {
  return (
    <section className={`min-h-screen flex items-center justify-center py-20 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center w-full">
        {children}
      </div>
    </section>
  )
}
