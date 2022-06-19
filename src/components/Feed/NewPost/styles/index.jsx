import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'initial', 'initial', '18px')};
  padding: 16px 18px;
  width: 100%;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.altTertiary};

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const PostForm = styled.form`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'initial', '5px')};
  margin-top: 5px;
  width: 100%;

  h3 {
    margin-bottom: 8px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  input {
    display: flex;
    background-color: rgb(255, 248, 241);
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    border: none;
    padding: 8px 12px;

    cursor: text;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  input:nth-child(3) {
    padding-bottom: 40px;
    cursor: text;
  }

  button {
    position: relative;
    left: 0px;
    top: 0px;

    padding: 8px 33px;
    margin: 10px 0 0 auto;

    color: white;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;

    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
    border-radius: ${({ theme }) => theme.styles.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.lowContrast};
    box-shadow: ${({ theme }) => theme.colors.lowContrastTertiary} 3px 4px 0px 0px;
    background-color: ${({ theme }) => theme.colors.lowContrast};

    :hover {
      opacity: 1.2;
    }

    &.clicked {
      left: 3px;
      top: 4px;

      box-shadow: white 0px 0px 0px 0px;
    }
  }
`;
