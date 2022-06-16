import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: #e7e7e7;
  border-radius: 8px;
  position: relative;
  width: 40%;
  .magnifying-glass {
    position: absolute;
    top: 11px;
    right: 15px;
    color: #c6c6c6;
    width: 21px;
    height: 21px;
    z-index: 3;
  }

  @media only screen and (max-width: 500px) {
    min-width: 180px;
  }
`;

export const StyledInput = styled.input`
  background-color: #ffffff;
  height: 45px;
  border-radius: 8px;
  width: 100%;
  color: #000000;
  z-index: 1;
  border: none;
  text-indent: 17px;
  cursor: pointer;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  overflow-y: scroll;
  width: 100%;
  padding: 10px 17px 23px 17px;
  gap: 16px;
  max-height: 18vh;
  &::-webkit-scrollbar {
    -webkit-appearance: scrollbartrack-vertical;
  }
  li {
    cursor: pointer;
    figure {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 39px;
        height: 39px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 12px;
      }
      figcaption {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #515151;
      }
    }
  }
`;
