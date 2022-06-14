const theme = {
  colors: {
    /* primary: 'rgb(76, 30, 79)',
    secondary: 'rgb(95, 72, 224)',
    altSecondary: 'rgb(128, 142, 161)',
    tertiary: 'rgb(250, 126, 97)',
    altTertiary: 'rgb(253, 235, 220)',
    barPrimary: 'rgb(82, 100, 174)',
    btnShadowColor: 'rgb(56, 42, 138)',
    
    darkGreen: "rgb(163,216,150)",
    regularGreen: "rgb(193,226,190)",
    lightGreen: "rgb(214,235,195)",
    lighterGreen: "rgb(230,248,209)",
    btnGreen: "rgb(118,185,71)",
    btnShadowGreen: "rgb(77,152,51)",
    success: "rgb(118,185,71)",
    danger: "rgb(255,0,0)", */

    text: 'rgb(112, 112, 112)',
    btnPrimary: 'rgb(24, 119, 242)',
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
    defaultBorder: '1px solid rgb(77, 77, 77)',
    borderRadius: '5px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};

export default theme;
