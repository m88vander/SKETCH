interface SKETCHLogoProps {
  variant?: 'default' | 'white' | 'gray'
  className?: string
}

const variantFilters: Record<'default' | 'white' | 'gray', string | undefined> = {
  default: undefined,
  white: 'brightness(0) invert(1)',
  gray: 'brightness(0) invert(1) opacity(0.45)',
}

export const SKETCHLogo = ({ variant = 'default', className = '' }: SKETCHLogoProps) => {
  const filterStyle = variantFilters[variant]
  const hasHeightClass = /\bh-/.test(className)

  return (
    <img
      src="nes1k.jpg"
      alt="SKETCH"
      className={`inline-block w-auto align-middle mx-0.5${hasHeightClass ? '' : ' h-[1.2em]'} ${className}`}
      style={{ 
        display: 'inline', 
        verticalAlign: 'middle',
        ...(filterStyle ? { filter: filterStyle } : {}),
      }}
    />
  )
}
