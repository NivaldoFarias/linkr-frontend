import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'initial', 'initial', '18px')};
  padding: 16px 18px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;

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
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    font-size: 20px;
  }

  input {
    display: flex;
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border-radius: ${({ theme }) => theme.mixins.borderRadius};
    border: none;
    padding: 8px 12px;

    cursor: text;
  }

  input:nth-child(3) {
    padding-bottom: 40px;
    cursor: text;
  }

  button {
    margin: 0 0 0 auto;
    padding: 8px 33px;
    border: none;
    border-radius: ${({ theme }) => theme.mixins.borderRadius};
    color: white;
    font-size: 14px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.btnPrimary};
    transition: 300ms;

    :hover {
      opacity: 0.8;
    }
  }
`;
