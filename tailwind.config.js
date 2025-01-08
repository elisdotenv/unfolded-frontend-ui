/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // --- Fonts  @Next/Fonts & Local Fonts.
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['var(--font-geist-sans)', 'sans-serif'],
        ternaryRegular: ['var(--font-satoshi-regular)', 'sans-serif'],
        ternaryMedium: ['var(--font-satoshi-medium)', 'sans-serif'],
        ternaryBold: ['var(--font-satoshi-bold)', 'sans-serif'],
        ternaryBlack: ['var(--font-satoshi-black)', 'sans-serif'],
        quadraRegular: ['var(--font-clash-regular)', 'sans-serif'],
        quadraMedium: ['var(--font-clash-medium)', 'sans-serif'],
        quadraSemiBold: ['var(--font-clash-semibold)', 'sans-serif'],
        quadraBold: ['var(--font-clash-bold)', 'sans-serif'],
      },

      // --- Typography plugin configutrations & customizations.
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: 'theme(fontFamily.secondary)',
            maxWidth: '75ch',
          },
        },
      }),

      // --- Screens & Media Queries.
      screens: {},

      // --- Theme Colors.
      colors: {
        primaryColor: '#252627',
        secondaryColor: '#bf1313',
        ternaryColor: '#5c9bfa',
        accentColor: '#fcfdfd',
        linkColor: 'fdfcfc',
        inlineColor: 'fcfdfc',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
