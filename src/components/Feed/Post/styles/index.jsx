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
    width: 50px;

    &__image {
      width: 50px;
      height: 50px;
      border-radius: 26.5px;
      object-fit: cover;
      margin-bottom: 18px;
      cursor: pointer;
    }
    &__likes {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '8px')};

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
        width: 100%;
        max-width: 80px;

        color: white;
        font-weight: 400;
        font-size: 0.7rem;
        font-family: ${({ theme }) => theme.fonts.secondary};

        text-align: center;
        word-spacing: -1px;

        strong {
          font-weight: 700;
        }
      }
    }
  }
  .right-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', 'initial')};
    height: 100%;

    .delete-post {
      ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', 'initial')};
      width: 100%;
    }
    .post-header {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', '12px')};
      position: relative;

      margin-bottom: 16px;
      width: 100%;

      &__username {
        p {
          font-size: 1.2rem;
          color: #ffffff;
          font-family: ${({ theme }) => theme.fonts.secondary};
          cursor: pointer;
        }
        .actions-container {
          ${({ theme }) => theme.mixins.position('absolute', '10px', '15px', 'initial', 'initial')};
          ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '18px')};

          font-size: 1rem;
          color: white;

          > svg {
            cursor: pointer;

            * {
              pointer-events: none;
            }
          }
        }
      }
      &__text {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.post};
        font-family: ${({ theme }) => theme.fonts.secondary};
        width: 100%;
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
        position: relative;
        min-height: 155px;
        height: 100%;
        width: 100%;

        cursor: pointer;
        overflow: hidden;
        border-radius: 11px;
        border: ${({ theme }) => theme.styles.defaultBorder};

        :hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .link-info {
          ${({ theme }) => theme.mixins.flexbox('column', 'center', 'initial', '7px')};
          padding: 20px 16px 14px;
          height: 100%;

          cursor: pointer;

          * {
            pointer-events: none;
          }
          &__title {
            color: #cecece;
            font-size: 1rem;
            line-height: 1.2rem;
            font-family: ${({ theme }) => theme.fonts.secondary};
          }
          &__description {
            color: #9b9595;
            font-size: 0.7rem;
            font-family: ${({ theme }) => theme.fonts.secondary};
            user-select: auto;
          }
          &__url {
            margin-top: 6px;
            width: 100%;

            color: #cecece;
            font-size: 0.6rem;
            font-family: ${({ theme }) => theme.fonts.secondary};

            user-select: auto;
            word-break: break-all;
          }
        }
        .link-image {
          ${({ theme }) => theme.mixins.flexbox('column', 'column', 'center', 'initial')};
          max-width: 155px;
          height: 100%;

          overflow: hidden;
          border-left: ${({ theme }) => theme.styles.defaultBorder};
          background-color: ${({ theme }) => theme.colors.background};

          > img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          }
        }
      }
    }
  }
`;

export default PostContainer;
