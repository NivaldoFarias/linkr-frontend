import styled from 'styled-components';

export const PostWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'center', 'initial')};
  position: relative;
  height: min-content;
  width: 100%;
`;

export const RepostLabel = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'center', '10px')};
  padding: 0 0 5px 10px;
  width: 100%;
  color: white;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  strong {
    font-weight: 700;
  }
  svg {
    font-size: 1.4rem;
  }
`;

export const ContentContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', '0')};
  width: 100%;
`;

const PostContainer = styled.div`
  ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '13px')};
  position: relative;
  padding: 18px 18px 22px 9px;
  min-height: 310px;
  width: 100%;
  min-width: 602px;

  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;

  .left-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'center', '15px')};
    height: 100%;
    width: 100px;

    &__image {
      width: 55px;
      height: 55px;
      cursor: pointer;

      object-fit: cover;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.altTertiary};
    }
    &__likes {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '6px')};

      > svg {
        color: ${({ theme }) => theme.colors.gradient};
        font-size: 1.7rem;
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

        color: ${({ theme }) => theme.colors.gradient};
        font-weight: 400;
        font-size: 0.8rem;
        font-family: ${({ theme }) => theme.fonts.secondary};

        text-align: center;

        strong {
          font-weight: 700;
        }
      }
    }
    &__comments {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '6px')};
      color: ${({ theme }) => theme.colors.gradient};
      padding-top: 6px;

      &__icon {
        font-size: 1.7rem;
        cursor: pointer;
        transition: all 5ms ease-in-out !important;

        * {
          pointer-events: none;
        }
        &.toggled {
          color: ${({ theme }) => theme.colors.btnPrimary};
        }
      }
      &__label {
        width: 100%;

        text-align: center;
        font-weight: 400;
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.gradient};
        font-family: ${({ theme }) => theme.fonts.secondary};
        line-height: 0.8rem;
      }
    }
    &__shares {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'center', '3px')};
      color: ${({ theme }) => theme.colors.gradient};

      &__icon {
        font-size: 1.9rem;
        cursor: pointer;
        transition: all 10ms ease-in-out;

        * {
          pointer-events: none;
        }
        &.reshared {
          color: ${({ theme }) => theme.colors.btnPrimary};
        }
      }
      &__label {
        width: 100%;

        text-align: center;
        font-weight: 400;
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.gradient};
        font-family: ${({ theme }) => theme.fonts.secondary};
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
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex', '12px')};
      position: relative;

      margin-bottom: 26px;
      width: 100%;

      &__username {
        p {
          cursor: pointer;
          font-size: 1.4rem;
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
          transition: color 200ms ease-in-out;

          &:hover {
            color: ${({ theme }) => theme.colors.tertiary};
          }
        }
      }
      .actions-container {
        ${({ theme }) => theme.mixins.position('absolute', '0px', '0px', 'initial', 'initial')};
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

      &__edit {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.editPost};
        font-family: ${({ theme }) => theme.fonts.secondary};
        width: 100%;
        border-radius: 7px;
        padding: 8px;
        border: none;
        font-weight: 400;
      }
    }
    .link {
      height: 185px;
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
        border-left: 2px solid ${({ theme }) => theme.colors.altTertiary};
        border-right: 2px solid ${({ theme }) => theme.colors.altTertiary};

        * {
          pointer-events: none;
        }
        :hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .link-info {
          ${({ theme }) => theme.mixins.flexbox('column', 'space-evenly', 'initial', '7px')};
          padding: 20px 16px 14px;
          height: 100%;

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
  &.open-comments {
    border-bottom: none !important;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media screen and (max-width: 620px) {
    min-height: 360px;
    min-width: 370px;

    .link {
      min-height: 240px;
      min-width: 270px;
    }
    .link__container {
      flex-direction: column !important;
    }
    .post-header {
      padding-bottom: 8px;
    }
    .right-container {
      height: 100%;
    }
    .link-image {
      width: 100px;
      border-left: none !important;
    }
  }
`;

export default PostContainer;
