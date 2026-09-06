import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,js,jsx,html}',
    './components/**/*.{ts,tsx,js,jsx,html}',
    './pages/**/*.{ts,tsx,js,jsx,html}',
    './src/**/*.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        scene: {
          strong: 'hsl(var(--scene-strong))',
          medium: 'hsl(var(--scene-medium))',
          faint: 'hsl(var(--scene-faint))',
          trunk: 'hsl(var(--scene-trunk))',
          ground: 'hsl(var(--scene-ground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        // Small pixel details use held frames; trees bend gently as a whole.

        // Bright for most of the cycle, then a stepped fade down and back up.
        'pixel-twinkle': {
          '0%, 55%': { opacity: '1' },
          '65%': { opacity: '0.6' },
          '75%': { opacity: '0.35' },
          '85%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
        // Whole plants bend from their roots by about one screen pixel.
        'tree-sway': {
          '0%, 100%': { transform: 'skewX(-1.25deg)' },
          '50%': { transform: 'skewX(1.25deg)' },
        },
        // Centre, one pixel right, centre, one pixel left.
        'pixel-sway': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(1px)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(-1px)' },
        },
        // A whole-gutter crossing, right to left: the track slides by its own
        // width plus the sprite it carries, so both ends are off screen.
        'pixel-drift': {
          from: { transform: 'translateX(0)' },
          to: {
            transform: 'translateX(calc(-100% - var(--sprite-width, 0px)))',
          },
        },
        // Eyes shut for a moment near the end of each cycle.
        'pixel-blink': {
          '0%, 93%': { opacity: '1' },
          '94%': { opacity: '0' },
          '97%, 100%': { opacity: '1' },
        },
        // Tail tip nudged one pixel right for a beat, then back.
        'pixel-flick': {
          '0%, 100%': { transform: 'translateX(0)' },
          '72%': { transform: 'translateX(1px)' },
          '84%': { transform: 'translateX(0)' },
        },
        // Hidden almost all cycle, then a short diagonal streak down and left.
        'pixel-shoot': {
          '0%, 95%': { opacity: '0', transform: 'translate(0, 0)' },
          '95.01%': { opacity: '1', transform: 'translate(0, 0)' },
          '97.5%': {
            opacity: '1',
            transform:
              'translate(calc(-14 * var(--pixel)), calc(9 * var(--pixel)))',
          },
          '97.51%, 100%': {
            opacity: '0',
            transform:
              'translate(calc(-14 * var(--pixel)), calc(9 * var(--pixel)))',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'pixel-twinkle': 'pixel-twinkle 4s steps(1, end) infinite',
        'pixel-sway': 'pixel-sway 7s steps(1, end) infinite',
        'tree-sway': 'tree-sway 11s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'pixel-drift': 'pixel-drift 180s linear infinite',
        'pixel-blink': 'pixel-blink 6s steps(1, end) infinite',
        'pixel-flick': 'pixel-flick 11s steps(1, end) infinite',
        'pixel-shoot': 'pixel-shoot 45s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transitionTimingFunction: {
        'ease-out-quad': 'cubic-bezier(.25, .46, .45, .94)',
        'ease-out-cubic': 'cubic-bezier(.215, .61, .355, 1)',
        'ease-out-quart': 'cubic-bezier(.165, .84, .44, 1)',
        'ease-out-quint': 'cubic-bezier(.23, 1, .32, 1)',
        'ease-out-expo': 'cubic-bezier(.19, 1, .22, 1)',
        'ease-out-circ': 'cubic-bezier(.075, .82, .165, 1)',

        'ease-in-out-quad': 'cubic-bezier(.455, .03, .515, .955)',
        'ease-in-out-cubic': 'cubic-bezier(.645, .045, .355, 1)',
        'ease-in-out-quart': 'cubic-bezier(.77, 0, .175, 1)',
        'ease-in-out-quint': 'cubic-bezier(.86, 0, .07, 1)',
        'ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'ease-in-out-circ': 'cubic-bezier(.785, .135, .15, .86)',

        'ease-in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'ease-in-cubic': 'cubic-bezier(.550, .055, .675, .19)',
        'ease-in-quart': 'cubic-bezier(.895, .03, .685, .22)',
        'ease-in-quint': 'cubic-bezier(.755, .05, .855, .06)',
        'ease-in-expo': 'cubic-bezier(.95, .05, .795, .035)',
        'ease-in-circ': 'cubic-bezier(.6, .04, .98, .335)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};
