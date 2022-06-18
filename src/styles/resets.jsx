import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const StyledResets = createGlobalStyle`
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
    user-select: none;
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
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  .modal-portal {
    position: relative;
    .modal {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '30px')};
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      margin: 0 auto;

      padding: 30px 20px;
      max-height: 260px;
      height: 100%;
      width: 100%;
      max-width: 360px;

      color: ${({ theme }) => theme.colors.primary};

      outline: none;
      overflow: hidden;
      border-radius: 5px;
      border: 1px solid rgb(204, 204, 204);
      background-color: ${({ theme }) => theme.colors.altTertiary};

      .close-modal-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 1.6em;
        cursor: pointer;

        * {
          pointer-events: none;
        }
      }
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

export default StyledResets;
