import React from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return React.createElement(
    HeadingTag,
    { className },
    children
  )
}
