// Design tokens and constants

export const typography = {
  display: {
    xl: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 700,
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },
    lg: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      fontWeight: 600,
      lineHeight: '1.2',
      letterSpacing: '-0.01em',
    },
    md: {
      fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
      fontWeight: 600,
      lineHeight: '1.3',
    },
  },
  body: {
    lg: {
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: '1.6',
    },
    base: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.7',
    },
    sm: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.6',
    },
  },
}

export const spacing = {
  gutter: '1.5rem',
  section: '4rem',
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
}

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const transitions = {
  fast: '0.15s ease',
  base: '0.3s ease',
  slow: '0.5s ease',
}
