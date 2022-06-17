import styled from 'styled-components';

const PostContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 18px;
  display: flex;
  gap: 18px;
  justify-content: flex-start;
  align-items: flex-start;

  .left-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'center', 'initial')};
    height: 100%;

    &__image {
      width: 50px;
      height: 50px;
      border-radius: 26.5px;
      object-fit: cover;
      margin-bottom: 18px;
      cursor: pointer;
    }
    &__likes {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '4px')};
      margin-top: 16px;

      svg {
        color: white;

        &.red-heart {
          color: rgb(172, 0, 0);
        }
      }
      &__label {
        font-family: Lato;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: center;
        color: white;
      }
    }
  }
  .right-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', 'initial')};
    height: 100%;

    &__username {
      font-size: 19px;
      margin-bottom: 4px;
      color: #ffffff;
      font-family: ${({ theme }) => theme.fonts.secondary};
      margin-bottom: 7px;
      cursor: pointer;
    }
    &__text {
      font-size: 17px;
      color: ${({ theme }) => theme.colors.post};
      font-family: ${({ theme }) => theme.fonts.secondary};
      margin-bottom: 16px;

      .hashtag {
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .link {
      text-decoration: none;
      cursor: pointer !important;

      &__container {
        ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', 'initial')};
        width: 100%;
        height: 155px;
        border: ${({ theme }) => theme.styles.defaultBorder};
        border-radius: 11px;
        position: relative;
        overflow: hidden;

        cursor: pointer;

        :hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .link-info {
          padding: 16px;
          ${({ theme }) => theme.mixins.flexbox('column', 'center', 'initial', 'initial')};
          height: 100%;
          cursor: pointer !important;

          &__title {
            font-size: 17px;
            color: #cecece;
            font-family: ${({ theme }) => theme.fonts.secondary};
          }
          &__description {
            font-size: 12px;
            color: #9b9595;
            font-family: ${({ theme }) => theme.fonts.secondary};
            margin-top: 5px;
          }
          &__url {
            font-size: 12px;
            color: #cecece;
            font-family: ${({ theme }) => theme.fonts.secondary};
            margin-top: 13px;
            width: 100%;
            word-break: break-all;
          }
        }
        .link-image {
          ${({ theme }) => theme.mixins.flexbox('column', 'column', 'center', 'initial')};
          width: 155px;
          height: 100%;

          overflow: hidden;
          border-left: ${({ theme }) => theme.styles.defaultBorder};
          background-color: ${({ theme }) => theme.colors.background};

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

export default PostContainer;
