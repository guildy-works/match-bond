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
            "navigation": ["min(3.4vw, 0.9rem)", { letterSpacing: "0.1rem", fontWeight: 700 }],
            "size-p-wide": ["min(3.5vw, 1rem)", { letterSpacing: "0.08rem", lineHeight: "1.5rem", fontWeight: "600", }],
            "size-p": ["min(3.5vw, 1rem)", { letterSpacing: "0.01rem", lineHeight: "1.4rem", fontWeight: "600" }],
            size3: ["min(3vw, 0.72rem)", { letterSpacing: "0.04rem", lineHeight: "1.4rem", fontWeight: "600" }],
            size2: ["min(3.2vw, 0.9rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "600" }],
            size1: ["min(3.8vw, 1.05rem)", { letterSpacing: "0.04rem", lineHeight: "1.2rem", fontWeight: "600" }],
            title4: ['min(4.2vw, 1.1rem)', { letterSpacing: "0rem", lineHeight: "1.8rem", fontWeight: "600" }],
            title3: ['min(4.6vw, 1.8rem)', { letterSpacing: "0rem", lineHeight: "2rem", fontWeight: "600" }],
            title2: ['min(5.8vw, 2.2rem)', { letterSpacing: "0rem", lineHeight: "2.5rem", fontWeight: "600" }],
            title1: ['min(6.5vw, 2.8rem)', { letterSpacing: "0rem", lineHeight: "3.8rem", fontWeight: "600" }],
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
        },
        colors: {
            ...colors,

            color14:"fffbfb",

            color3: '#f07f7e ',
            color5: '#efd8d7',
            color1: '#f5f0f0',
            color4: '#f9f3f3',
            color2: '#dfeef5',

            color7: '#d4ebd0',
            color6: '#fff5e7',

            color9: "#ec4b4a",
            color10: "#54010b",
            color11: "#f5b066",
            color12: "#fedebb",
            color12_2: "#fbf0eb",

            color13:"#f2dac6",

            color9_2:"#784644",

            white: '#ffffff',

            font1: '#281616',
            font2: 'rgb(223 150 150)',
            font3: '#c07a7a',

            grey1: '#bba3a3',
            grey2: '#bba3a3',
        },
    },
    plugins: [],
};
export default config;
