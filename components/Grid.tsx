import React from 'react'

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'base' | 'lg'
}

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

const gapClasses = {
  sm: 'gap-4',
  base: 'gap-6',
  lg: 'gap-8',
}

export const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols = 2,
  gap = 'base',
}) => {
  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}
