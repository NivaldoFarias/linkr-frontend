import styled from 'styled-components';

const StyledCommentSection = styled.section`
  ${({ theme }) => theme.mixins.flexbox('column', 'initial', 'center', '5px')};

  padding: 10px 20px 15px;
  height: 100%;
  width: 590px;

  border-left: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-right: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.tertiary};

  transition: height 500ms cubic-bezier(0.32, 0.13, 0.32, 0.96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.commentSection};
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.commentSection} 3%,
    ${({ theme }) => theme.colors.primary} 97%
  );
  overflow: hidden;

  .comments-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', 'initial')};
    width: 100%;
  }
  .comment {
    ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'center', '15px')};

    padding: 10px 0 15px;
    width: 100%;

    color: ${({ theme }) => theme.colors.gradient};
    font-family: ${({ theme }) => theme.fonts.secondary};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gradient};

    &__avatar {
      height: 45px;
      width: 45px;
      cursor: pointer;

      object-fit: cover;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.altTertiary};
    }
    &__content {
      ${({ theme }) => theme.mixins.flexbox('column', 'center', 'flex-start', '10px')};
      width: 90%;

      &__username {
        ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', '3px')};
        width: 100%;

        > p {
          cursor: pointer;
        }
      }
      &__text {
        ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', 'initial')};
        width: 100%;

        line-height: 17px;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.post};

        user-select: auto;
        hyphens: auto;
        word-break: break-word;
        text-overflow: ellipsis;
      }
      .comment-user-status {
        ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', '3px')};
        width: 100%;

        &__icon {
          font-size: 0.9rem;
          color: ${({ theme }) => theme.colors.btnPrimary};
        }
        &__label {
          font-weight: bold;
          font-size: 0.7rem;
          color: ${({ theme }) => theme.colors.btnPrimary};
        }
      }
    }
  }
  .new-comment {
    ${({ theme }) => theme.mixins.flexbox('row', 'center', 'center', '15px')};
    position: relative;

    padding: 10px 0 5px;
    height: 68px;
    width: 100%;
    color: ${({ theme }) => theme.colors.altTertiary};

    &__avatar {
      height: 45px;
      width: 45px;
      cursor: pointer;

      object-fit: cover;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.secondary};
    }
    &__input {
      padding: 18px 40px 7px 5px;
      width: 100%;
      height: 100%;

      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.altTertiary};
      font-family: ${({ theme }) => theme.fonts.secondary};

      cursor: text;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.altTertiary};
      background-color: transparent;

      &::-webkit-resizer {
        display: none;
      }
      &::placeholder {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.gradient};
      }
    }
    &__icon {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      font-size: 1.3rem;

      * {
        pointer-events: none;
      }
    }
  }
  &.collapsed {
    padding: 0;
    height: 0;
    border: none;

    * {
      padding: 0;
      height: 0;
      width: 0;
      border: none;
    }
    .comments-container {
      display: none;
    }
  }
`;

export default StyledCommentSection;
