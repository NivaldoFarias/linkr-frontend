import styled from 'styled-components';

const StyledFollowButton = styled.button`
  position: relative;
  left: 0px;
  top: 0px;

  padding: 8px 16px;
  margin: 10px 0 30px auto;
  min-height: 36px;
  min-width: 150px;

  color: ${({ theme }) => theme.colors.gradient};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.colors.btnShadowColor} 3px 4px 0px 0px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &.clicked:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  &.clicked {
    left: 3px;
    top: 4px;

    box-shadow: white 0px 0px 0px 0px;
    opacity: 0.6;
  }

  .loading-dots {
    position: relative;
    left: -15px;
    right: 0;
    margin: 0 auto;

    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    box-shadow: 12px 0 0 -5px ${({ theme }) => theme.colors.gradient};
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
      color: ${({ theme }) => theme.colors.gradient};
    }

    &::before {
      box-shadow: -25px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      animation: dotPulseBefore 1s infinite linear;
      animation-delay: 0s;
    }

    &::after {
      box-shadow: 36px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      animation: dotPulseAfter 1s infinite linear;
      animation-delay: 0.33333s;
    }
    @keyframes dotPulseBefore {
      0% {
        box-shadow: -25px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      }
      30% {
        box-shadow: -25px 0 0 2px ${({ theme }) => theme.colors.gradient};
      }
      60%,
      100% {
        box-shadow: -25px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      }
    }
    @keyframes dotPulse {
      0% {
        box-shadow: 12px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      }
      30% {
        box-shadow: 12px 0 0 2px ${({ theme }) => theme.colors.gradient};
      }
      60%,
      100% {
        box-shadow: 12px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      }
    }
    @keyframes dotPulseAfter {
      0% {
        box-shadow: 36px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      }
      30% {
        box-shadow: 36px 0 0 2px ${({ theme }) => theme.colors.gradient};
      }
      60%,
      100% {
        box-shadow: 36px 0 0 -5px ${({ theme }) => theme.colors.gradient};
      }
    }
  }
`;

export default StyledFollowButton;
