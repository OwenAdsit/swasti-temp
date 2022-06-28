module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    screens: {
      sm: '768px',
      lg: '1024px',
      xl: '1280px',
      pro: '1400px',
      '2xl': '1536px'
    },
    fontFamily: {
      gilda: ['Gilda Display', 'serif'],
      ginger: ['ginger', 'serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: '#F9F9F8',
      black: '#000',
      white: '#fff',
      green: {
        light: '#848B6F',
        DEFAULT: '#5B604A',
        dark: '#414141'
      },
    },
    fontSize: {
      sm: '15px',
      'md--mobile': '25px',
      md: '45px',
      l: '50px',
      xl: '110px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '25px',
        sm: '60px',
        lg: '100px',
        xl: '160px'
      }
    },
    extend: {
      backgroundImage: {
        texture: "url('~assets/images/background-texture.jpg')",
      },
    },
  },
  plugins: [],
}
