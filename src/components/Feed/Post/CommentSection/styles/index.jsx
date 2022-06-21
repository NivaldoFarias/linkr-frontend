import styled from 'styled-components';

const StyledCommentSection = styled.section`
  ${({ theme }) => theme.mixins.flexbox('column', 'space-between', 'center', '5px')};

  height: 100%;
  padding: 0 20px 10px;
  width: 100%;

  transition: all 500ms cubic-bezier(0, 0, 0.32, 0.96);
  background-color: ${({ theme }) => theme.colors.commentSection};

  .comments-container {
    ${({ theme }) => theme.mixins.flexbox('column', 'flex-start', 'flex-start', 'initial')};
    width: 100%;
  }
  .comment {
    ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'center', '15px')};

    padding: 10px 0;
    width: 100%;

    color: ${({ theme }) => theme.colors.gradient};
    font-family: ${({ theme }) => theme.fonts.secondary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.altSecondary};

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
      width: 100%;

      &__username {
        ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', '5px')};
        width: 100%;
      }
      &__text {
        ${({ theme }) => theme.mixins.flexbox('row', 'flex-start', 'flex-start', 'initial')};
        width: 100%;

        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.post};
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
      border: 2px solid ${({ theme }) => theme.colors.altTertiary};
    }
    &__input {
      padding: 13px 40px 7px 3px;
      width: 100%;
      height: 100%;

      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.altTertiary};
      font-family: ${({ theme }) => theme.fonts.secondary};

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
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      font-size: 1.3rem;
    }
  }
  &.collapsed {
    padding: 0;
    height: 0;

    * {
      padding: 0 !important;
      height: 0 !important;
      width: 0 !important;
      border: none !important;
    }
    .comments-container {
      display: none;
    }
  }
`;

export default StyledCommentSection;
