import styled from 'styled-components';

const PostContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', '18px')};
  padding: 18px;
  width: 100%;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};

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

      > svg {
        color: white;
        font-size: 1.5rem;
        cursor: pointer;

        * {
          pointer-events: none;
        }
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

    .post-header {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', '12px')};
      margin-bottom: 16px;
      width: 100%;

      &__username {
        font-size: 1.2rem;
        color: #ffffff;
        font-family: ${({ theme }) => theme.fonts.secondary};
        cursor: pointer;
      }
      &__text {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.post};
        font-family: ${({ theme }) => theme.fonts.secondary};

        .hashtag {
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
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
