import styled from 'styled-components';

const PostContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', '18px')};
  padding: 18px;
  width: 100%;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.primary};

  .left-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'center', 'initial')};
    height: 100%;
    width: 50px;

    &__image {
      margin-bottom: 18px;
      width: 50px;
      height: 50px;
      cursor: pointer;

      object-fit: cover;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.altTertiary};
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

        color: ${({ theme }) => theme.colors.gradient};
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
    ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', 'initial')};
    height: 100%;
    width: 100%;

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
          cursor: pointer;
          font-size: 1.3rem;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.gradient};
          font-family: ${({ theme }) => theme.fonts.secondary};
        }
      }
      &__text {
        width: 100%;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.post};
        font-family: ${({ theme }) => theme.fonts.secondary};

        .hashtag {
          color: ${({ theme }) => theme.colors.gradient};
          font-weight: bold;
          cursor: pointer;
        }
      }
      .actions-container {
        ${({ theme }) => theme.mixins.position('absolute', '10px', '15px', 'initial', 'initial')};
        ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '18px')};

        font-size: 1rem;
        color: ${({ theme }) => theme.colors.gradient};

        > svg {
          cursor: pointer;

          * {
            pointer-events: none;
          }
        }
      }
    }
    .link {
      height: 155px;
      width: 100%;

      cursor: pointer;
      text-decoration: none;

      &__container {
        ${({ theme }) => theme.mixins.flexbox('row', 'space-between', 'center', 'initial')};
        position: relative;
        min-height: 155px;
        height: 100%;
        width: 100%;

        cursor: pointer;
        overflow: hidden;
        border-radius: 16px;
        border-left: 1px solid ${({ theme }) => theme.colors.altTertiary};
        border-right: 1px solid ${({ theme }) => theme.colors.altTertiary};

        :hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .link-info {
          ${({ theme }) => theme.mixins.flexbox('column', 'space-evenly', 'initial', '7px')};
          padding: 20px 16px 14px;
          height: 100%;

          cursor: pointer;

          * {
            pointer-events: none;
          }
          &__title {
            color: ${({ theme }) => theme.colors.post};
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

            color: ${({ theme }) => theme.colors.post};
            font-size: 0.6rem;
            font-family: ${({ theme }) => theme.fonts.secondary};

            user-select: auto;
            word-break: break-all;
          }
        }
        .link-image {
          ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '10px')};

          min-width: 155px;
          height: 100%;

          overflow: hidden;
          border-left: 0.5px solid ${({ theme }) => theme.colors.altTertiary};
          background-color: transparent;

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &__not-supported-icon {
            font-size: 3.6rem;
            color: ${({ theme }) => theme.colors.tertiary};
          }
          &__not-supported-text {
            font-size: 1rem;
            font-weight: bold;
            color: ${({ theme }) => theme.colors.tertiary};
            font-family: ${({ theme }) => theme.fonts.secondary};
          }
        }
      }
    }
  }
`;

export default PostContainer;
