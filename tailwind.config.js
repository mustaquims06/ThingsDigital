/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'github-dark': '#0d1117',
        'github-darker': '#161b22',
        'github-darkest': '#010409',
        'github-text': '#f0f6fc',
        'github-muted': '#7d8590',
        'github-accent': '#ff0040', // Main Accent (Red)
        'github-pink': '#ff1744',   // Secondary Accent (Pink)
        'github-navy': '#1f2937',   // Navy Blue
        'github-blue': '#0969da',   // GitHub Blue
        'github-navy-light': '#374151', // Light Navy
        'github-border': '#30363d',
        'github-hover': '#21262d',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 5s ease infinite',
        'star-twinkle': 'star-twinkle 4s ease-in-out infinite',
        'meteors': 'meteors 20s linear infinite',
        'aurora': 'aurora 10s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #ff0040, 0 0 20px #ff0040' },
          '100%': { boxShadow: '0 0 20px #ff0040, 0 0 40px #ff0040, 0 0 60px #ff0040' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 8px #ff0040)' },
          '50%': { opacity: 0.8, filter: 'drop-shadow(0 0 25px #ff0040)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        meteors: {
          '0%': { transform: 'translateX(-100px) translateY(-100px)' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)' },
        },
        aurora: {
          '0%, 100%': { opacity: 0.3, transform: 'translateX(-50%) scale(1)' },
          '50%': { opacity: 0.8, transform: 'translateX(-50%) scale(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'github-gradient': 'linear-gradient(135deg, #ff0040, #0969da, #1f2937)',
      },
    },
  },
  plugins: [],
};
