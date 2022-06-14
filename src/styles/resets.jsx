import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const StyleResets = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-weight: 300;
    letter-spacing: 1px;
    
    scrollbar-width: none; /* for Firefox */
    -ms-overflow-style: none; /* for IE, Edge */
    
    cursor: default;
    transition: all 200ms ease-in-out 0s;
  }
  ::-webkit-scrollbar {
    display: none;
    appearance: none;
  }
  *.hidden {
    display: none;
  }
  *.disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  div.root {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
`;

export default StyleResets;
