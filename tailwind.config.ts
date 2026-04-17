import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontSize: {
            "navigation": ["min(3.4vw, 0.82rem)", { letterSpacing: "0.08rem", fontWeight: 400 }],
            "size-p-wide": ["min(3.5vw, 0.95rem)", { letterSpacing: "0.04rem", lineHeight: "1.9rem", fontWeight: "700" }],
            "size-p": ["min(3.5vw, 0.9rem)", { letterSpacing: "0.02rem", lineHeight: "1.9rem", fontWeight: "700" }],
            size3: ["min(3vw, 0.75rem)", { letterSpacing: "0.02rem", lineHeight: "1.5rem", fontWeight: "700" }],
            size2: ["min(3.2vw, 0.85rem)", { letterSpacing: "0.02rem", lineHeight: "1.7rem", fontWeight: "700" }],
            size1: ["min(3.8vw, 1rem)", { letterSpacing: "0.02rem", lineHeight: "1.8rem", fontWeight: "700" }],
            title4: ['min(4.2vw, 1.05rem)', { letterSpacing: "0.01rem", lineHeight: "1.8rem", fontWeight: "900" }],
            title3: ['min(4.6vw, 1.5rem)', { letterSpacing: "0.01rem", lineHeight: "2.2rem", fontWeight: "900" }],
            title2: ['min(5.8vw, 1.8rem)', { letterSpacing: "0.02rem", lineHeight: "2.6rem", fontWeight: "700" }],
            title1: ['min(6.5vw, 2.4rem)', { letterSpacing: "0.02rem", lineHeight: "3.4rem", fontWeight: "700" }],
        },
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            asterdam: ['Amsterdam', 'sans-serif'],
            slight: ['Slight', 'sans-serif'],
            body: ['"Zen Old Mincho"', 'sans-serif'],
            mincho: ['"Zen Old Mincho"', 'serif'],
        },
        colors: {
            ...colors,

            // Legacy (keep for blog/services pages)
            color14: "#fffbf9",
            color3: '#c87b7a',
            color5: '#ecd9d8',
            color1: '#f7f3f2',
            color4: '#faf6f5',
            color2: '#e8eff5',
            color7: '#d4ebd0',
            color6: '#fef8f0',
            color9: "#9e4a5a",
            color10: "#3a2828",
            color11: "#c4a87c",
            color12: "#f0ddd0",
            color12_2: "#faf3ee",
            color13: "#edddd0",
            color9_2: "#6b4543",

            white: '#ffffff',

            // --- New design system ---
            // Primary rose tones
            primary: '#9e4a5a',
            'primary-light': '#c47a88',
            'primary-dark': '#7a3545',
            'primary-pale': '#f5eaed',

            // Neutral warm tones
            body: '#3a2828',
            'body-light': '#6b5555',
            'body-muted': '#9a8585',
            'body-faint': '#c4b5b5',

            // Background layers
            linen: '#faf8f5',
            blush: '#f5ece7',
            sand: '#eee5dd',
            petal: '#faf0f0',

            // Accent
            gold: '#c4a87c',
            'gold-light': '#e0d2b8',
            'gold-dark': '#9a7f55',

            // Legacy aliases (for components not yet updated)
            font1: '#3a2828',
            font2: '#c09090',
            font3: '#9a8585',
            grey1: '#b0a0a0',
            grey2: '#b0a0a0',
            accent: '#9e4a5a',
            'accent-light': '#c47a88',
            'accent-dark': '#7a3545',
            cream: '#faf6f3',
            'warm-white': '#faf8f5',
            'warm-gray': '#f0ebe8',
            champagne: '#e0d2b8',
            'dusty-rose': '#c8a0a0',
            'soft-gold': '#c4a87c',
        },
    },
    plugins: [],
};
export default config;
