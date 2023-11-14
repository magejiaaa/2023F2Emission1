/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'sp-1': '4px',
        'sp-2': '8px',
        'sp-3': '16px',
        'sp-4': '32px',
        'sp-5': '48px',
        'sp-6': '64px'
      },
      borderRadius: {
        'sp-1': '4px',
        'sp-2': '8px',
        'sp-3': '16px',
        'sp-4': '32px',
        'sp-5': '48px',
        'sp-6': '64px'
      }
    },
    colors: {
      'Grayscale': {
        0: '#FFF',
        1: '#E2E2E2',
        2: '#C6C6C6',
        3: '#8C8C8C',
        4: '#444',
        5: '#000'
      },
      'Primary': {
        1: '#FBFFE1',
        2: '#EEFFA9',
        3: '#D1FA31',
        4: '#BBE217',
        5: '#A8C400'
      }
    }
  },
  plugins: [],
}

