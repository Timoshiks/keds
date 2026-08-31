/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Golos Text', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-surface': '#141414',
        'bg-elevated': '#1C1C1C',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-focus': 'rgba(255, 255, 255, 0.24)',
        'text-primary': '#F5F5F5',
        'text-secondary': '#888888',
        'accent': '#FF5500',
        'accent-contrast': '#FFFFFF',
      },
      borderRadius: {
        'card': '12px',
        'chip': '8px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.tabular-nums': {
          'font-variant-numeric': 'tabular-nums',
          'font-feature-settings': '"tnum"',
        },
      });
    },
  ],
}
