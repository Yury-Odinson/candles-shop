import type {Config} from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{html,js,t,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
export default config;