export const themeColors = {
  brand: {
    purple: '#6C4EF5',
    deepPurple: '#5B3BF6',
    blue: '#4D8BFF',
    green: '#21C16B',
    foxOrange: '#FF7A2B',
    foxDark: '#1F1F1F',
    foxCream: '#F6F2EE',
  },
  semantic: {
    success: '#21C16B',
    warning: '#FFC800',
    streak: '#FFB800',
    error: '#F44D4F',
    info: '#4D8BFF',
  },
  neutral: {
    textPrimary: '#0D132B',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    surface: '#F6F7FB',
    background: '#FFFFFF',
    dark: '#0F172A',
    white: '#FFFFFF',
    shadow: '#D9DDE6',
  },
} as const;

export const primaryPalette = [
  { name: 'Lingua Purple', hex: '#6C4EF5', tone: themeColors.brand.purple },
  { name: 'Lingua Deep Purple', hex: '#5B3BF6', tone: themeColors.brand.deepPurple },
  { name: 'Lingua Blue', hex: '#4D8BFF', tone: themeColors.brand.blue },
  { name: 'Lingua Green', hex: '#21C16B', tone: themeColors.brand.green },
] as const;

export const semanticPalette = [
  { name: 'Success', hex: '#21C16B', tone: themeColors.semantic.success },
  { name: 'Warning', hex: '#FFC800', tone: themeColors.semantic.warning },
  { name: 'Streak', hex: '#FFB800', tone: themeColors.semantic.streak },
  { name: 'Error', hex: '#F44D4F', tone: themeColors.semantic.error },
  { name: 'Info', hex: '#4D8BFF', tone: themeColors.semantic.info },
] as const;

export const neutralPalette = [
  { name: 'Text / Primary', hex: '#0D132B', tone: themeColors.neutral.textPrimary },
  { name: 'Text / Secondary', hex: '#6B7280', tone: themeColors.neutral.textSecondary },
  { name: 'Border', hex: '#E5E7EB', tone: themeColors.neutral.border },
  { name: 'Surface', hex: '#F6F7FB', tone: themeColors.neutral.surface },
  { name: 'Background', hex: '#FFFFFF', tone: themeColors.neutral.background },
] as const;
