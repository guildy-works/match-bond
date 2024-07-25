import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
            "size-p": ["min(2.8vw, 0.82rem)", {letterSpacing: "0.08rem"}],
            size3:  ["min(1vw, 0.72rem)", {letterSpacing: "0.08rem"}],
            size2: ["min(3.2vw, 1rem)", {letterSpacing: "0.08rem"}],
            size1:  ["min(1.7vw, 1.25rem)", {letterSpacing: "0.08rem"}],
            title4: ['min(3.6vw, 1.1rem)', { letterSpacing: "0.24rem" }],
            title3: ['min(4vw, 1.3rem)', { letterSpacing: "0.24rem" }],
            title2: ['min(4.5vw, 1.6rem)', { letterSpacing: "0.24rem" }],
            title1: ['min(5vw, 2.2rem)', { letterSpacing: "0.24rem" }],
        },
        screens: {
            sm: '600px',
            md: '1240px',
            lg: '1560px',
            xl: '1920px',
        },
        fontFamily: {
            sans: ['Zen Old Mincho', 'sans-serif'],
            serif: ['Zen Old Mincho', 'sans-serif'],
            body: "sans",
            asterdam: ['Amsterdam', 'sans-serif'],
        },
        colors: {
            ...colors,

            color3: 'rgb(223 150 150)',
            color5: '#efd8d7',
            color1: '#f3e8e8',
            color4: '#f9f3f3',

            color2: '#cbe4e0',
            color6: '#f9f3f3',
            color7: '#e1e7e7',
            color8: '#f3f5f5',

            white: '#ffffff',

            font1: '#292939',
            font2: 'rgb(223 150 150)',
            font3: '#c07a7a',

            grey1: '#bba3a3',
            grey2: '#bba3a3',
        },
    },
    plugins: [],
};
export default config;
