import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses = {
  primary:
    'bg-black text-white hover:bg-gray-900 border border-black',
  secondary:
    'bg-transparent text-black hover:bg-gray-100 border border-black',
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors duration-200 ease'

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
