import styled from 'styled-components';

const StyledLoadingDots = styled.div`
  /* sourced from https://codepen.io/nzbin/pen/GGrXbp?editors=1100 (modified) */
  position: relative;
  left: -15px;
  right: 0;
  margin: 0 auto;

  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 12px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
  animation: dotPulse 1s infinite linear;
  animation-delay: 0.17777777s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &::before {
    box-shadow: -25px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    animation: dotPulseBefore 1s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    box-shadow: 36px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    animation: dotPulseAfter 1s infinite linear;
    animation-delay: 0.33333s;
  }
  @keyframes dotPulseBefore {
    0% {
      box-shadow: -25px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    }
    30% {
      box-shadow: -25px 0 0 2px ${({ theme }) => theme.colors.tertiary};
    }
    60%,
    100% {
      box-shadow: -25px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    }
  }
  @keyframes dotPulse {
    0% {
      box-shadow: 12px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    }
    30% {
      box-shadow: 12px 0 0 2px ${({ theme }) => theme.colors.tertiary};
    }
    60%,
    100% {
      box-shadow: 12px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    }
  }
  @keyframes dotPulseAfter {
    0% {
      box-shadow: 36px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    }
    30% {
      box-shadow: 36px 0 0 2px ${({ theme }) => theme.colors.tertiary};
    }
    60%,
    100% {
      box-shadow: 36px 0 0 -5px ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export default StyledLoadingDots;
