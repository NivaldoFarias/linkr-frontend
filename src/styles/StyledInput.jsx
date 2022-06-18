import styled from 'styled-components';

const InputGroup = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.forms};
  appearance: none;

  input {
    display: block;
    padding: 10px 10px 10px 5px;
    width: 300px;

    font-weight: 300;
    font-size: 1.2rem;
    color: white;

    border: none;
    background-color: transparent;
    border-bottom: 1px solid white;
  }
  input:hover {
    cursor: text;
  }
  input:focus {
    outline: none;
  }
  label {
    position: absolute;
    top: 15px;
    left: 5px;

    font-size: 1rem;
    font-weight: 300;

    color: white;

    pointer-events: none;
    transition: 0.2s ease all;
  }
  /* active state */
  input:focus ~ label,
  input:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  input #placeholder {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:first-line {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white !important;
  }
  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 300px;
  }
  .bar:before,
  .bar:after {
    position: absolute;
    bottom: 1px;

    height: 2px;
    width: 0;

    content: '';
    background: ${({ theme }) => theme.colors.tertiary};
    transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }
  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }
  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    top: 25%;
    left: 0;

    height: 60%;
    width: 100px;

    opacity: 0.5;
    pointer-events: none;
  }
  /* active state */
  input:focus ~ .highlight {
    animation: input-highlighter 0.3s ease;
  }
  @keyframes input-highlighter {
    from {
      background: ${({ theme }) => theme.colors.tertiary};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @media screen and (min-width: 750px) {
    input {
      padding-top: 15px;
      font-size: 1.5rem;
    }
    label {
      top: 20px;
      font-weight: 200;
      font-size: 1.3rem;
    }
    input:focus ~ label,
    input:valid ~ label {
      font-size: 1.3rem;
    }
  }
`;

export default InputGroup;
