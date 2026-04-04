import type { Config } from "tailwindcss";
const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        // Add external component libraries if needed:
        // "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: "#0D0D0F",   // bg-bg
                    surface: "#18181C",   // bg-bg-surface
                    border: "#2A2A30",   // border-bg-border
                },
                accent: {
                    DEFAULT: "#6D40FF",   // bg-accent
                    hover: "#8A63FF",   // hover:bg-accent-hover
                },
                content: {
                    primary: "#F2F0FF", // text-content-primary
                    secondary: "#9B97B2", // text-content-secondary
                },
            }
        },
    }
}

export default config;