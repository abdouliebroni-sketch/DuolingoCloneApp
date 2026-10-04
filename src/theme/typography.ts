export const fontFamilies = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semibold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export const typographyTheme = {
  family: 'Poppins',
  h1: {
    size: 32,
    lineHeight: 1.2,
    weight: '700',
    letterSpacing: -1,
  },
  h2: {
    size: 24,
    lineHeight: 1.3,
    weight: '600',
    letterSpacing: -0.7,
  },
  h3: {
    size: 20,
    lineHeight: 1.3,
    weight: '600',
    letterSpacing: -0.28,
  },
  h4: {
    size: 16,
    lineHeight: 1.4,
    weight: '500',
    letterSpacing: 0,
  },
  bodyLarge: {
    size: 16,
    lineHeight: 1.6,
    weight: '400',
    letterSpacing: 0,
  },
  bodyMedium: {
    size: 14,
    lineHeight: 1.6,
    weight: '400',
    letterSpacing: 0,
  },
  bodySmall: {
    size: 13,
    lineHeight: 1.6,
    weight: '400',
    letterSpacing: 0,
  },
  caption: {
    size: 11,
    lineHeight: 1.4,
    weight: '400',
    letterSpacing: 0,
  },
} as const;
