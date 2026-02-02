/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ocean: '#0A192F', // Deep Navy (Background)
                navy: '#0A192F',
                slate: '#112240', // Card Background
                light: '#E6F1FF', // Off-white text
                sand: '#F5F5DC', // Keeping for legacy, maybe remove later
                sunset: '#FF6B6B', // Tweaked vibrant orange
                cyan: '#64FFDA', // Electric Cyan
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
