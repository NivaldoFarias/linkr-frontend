const theme = {
  colors: {
    primary: 'rgb(76, 30, 79)',
    secondary: 'rgb(95, 72, 224)',
    altSecondary: 'rgb(128, 142, 161)',
    tertiary: 'rgb(250, 126, 97)',
    altTertiary: 'rgb(253, 235, 220)',
    barPrimary: 'rgb(82, 100, 174)',
    btnShadowColor: 'rgb(56, 42, 138)',

    lowContrast: 'rgb(251, 133, 0)',
    lowContrastSecondary: 'rgb(248, 158, 55)',
    lowContrastTertiary: 'rgb(184, 98, 0)',

    gradient: 'rgb(255, 248, 241)',

    text: 'rgb(112, 112, 112)',
    post: 'lightgray',
    btnPrimary: 'rgb(24, 119, 242)',
    inputBackground: 'rgb(239, 239, 239)',
    background: 'rgb(21, 21, 21)',
    foreground: 'rgb(51, 51, 51)',

    success: 'rgb(118,185,71)',
    danger: 'rgb(255,0,0)',
  },
  fonts: {
    logotype: "'Passion One', cursive;",
    primary: "'Oswald', sans-serif;",
    secondary: "'Lato', sans-serif;",
    forms: "'Lexend Deca', sans-serif;",
  },
  mixins: {
    flexbox: (direction, justify, align, gap) => {
      return `display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};`;
    },
    position: (position, top, right, bottom, left) => {
      return `position: ${position};
        top: ${top};
        right: ${right};
        bottom: ${bottom};
        left: ${left};`;
    },
  },
  styles: {
    defaultBorder: '1px solid rgb(76, 30, 79)',
    borderRadius: '5px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};

export default theme;
