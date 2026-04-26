import { Platform } from 'react-native';

export const portfolioTheme = {
    colors: {
        brand: '#1f28b8',
        textPrimary: '#1b1b1f',
        textOnBrand: '#f5f7ff',
        surface: '#d5d5dd',
        surfaceAlt: '#cbcbd8',
        accent: '#ff8f1f',
        border: '#b4b4c4',
        card: '#dfe0ee',
        error: '#c93535',
        success: '#246f3d',
    },
    spacing: {
        xs: 6,
        sm: 10,
        md: 16,
        lg: 24,
        xl: 36,
        xxl: 56,
    },
    radius: {
        sm: 8,
        md: 12,
        lg: 18,
    },
    fonts: {
        heading: Platform.select({
            web: 'Georgia',
            default: 'serif',
        }),
        body: Platform.select({
            web: 'Arial',
            default: 'sans-serif',
        }),
    },
};

export type PortfolioTheme = typeof portfolioTheme;