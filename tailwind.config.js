module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    colors: {
      'transparentColor': 'transparent',
      'primaryColor': '#01B68D',
      'secondaryColor': '#707070',
      'breakColor': '#22577A',
      'white': '#ffff',
      'black': '#000000',
      'background-main-screen': '#f7f7f7',
      'warning-background': '#F3EA91',
      'warning-text': '#E3CF0B',
      'banned-background': '#E23939',
      'banned-text': '#FC6464',
      'not-violated-background': '#46D689',
      'not-violated-text': '#01B68D',
    },
    extend: {},
  },
};
