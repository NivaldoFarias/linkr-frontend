import styled from "styled-components";

export const ContentModal = styled.div`
    text-align: center;
    color: white;
    h2 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 32px;
    }

    div {
        display: flex;
        gap: 28px;
        justify-content: center;
    }

    button {
        padding: 8px 16px;
        background-color: white;
        color: ${({ theme }) => theme.colors.btnPrimary};
        font-size: 16px;
        font-weight: 700;
        border: none;

        :last-child {
        background-color: ${({ theme }) => theme.colors.btnPrimary};
        color: white;
        }
    }
`

export const PostContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 16px;
    padding: 18px;
    display: flex;
    gap: 18px;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Left = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    object-fit: cover;
    margin-bottom: 18px;
    cursor: pointer;
`;

export const Right = styled.div`
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`;

export const UserAndDeleteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    svg {
        color: white;
        font-size: 16px;

        :last-child {
        margin-left: 4px;
        }
    }
`;

export const UserName = styled.div`
    font-size: 19px;
    margin-bottom: 4px;
    color: #ffffff;
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-bottom: 7px;
    cursor: pointer;
`;

export const PostText = styled.div`
    font-size: 17px;
    color: ${({ theme }) => theme.colors.post};
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-bottom: 16px;
`;

export const Hashtag = styled.span`
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer !important;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 155px;
    flex: 0 0 auto;
    border: ${({ theme }) => theme.styles.defaultBorder};
    border-radius: 11px;
    position: relative;
    overflow: hidden;

    cursor: pointer;

    :hover {
        background-color: rgba(255, 255, 255, 0.05);
    }             
`;

export const LinkInfo = styled.div`
    padding: 16px;
    flex: 1 1 auto;
    height: 100%;
    cursor: pointer !important;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    border-left: ${({ theme }) => theme.styles.defaultBorder};
    overflow: hidden;
    width: 155px;
    height: 100%;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Title = styled.div`
    font-size: 17px;
    color: #cecece;
    font-family: ${({ theme }) => theme.fonts.secondary};
`;
export const Description = styled.div`
    font-size: 12px;
    color: #9b9595;
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-top: 5px;
`;

export const Url = styled.div`
    font-size: 12px;
    color: #cecece;
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-top: 13px;
    width: 100%;
    word-break: break-all;
`;

export const Like = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 16px;
    gap: 4px;

    svg {
        color: ${({ hasLiked }) => {
            return hasLiked ? '#AC0000' : '#ffffff';
        }};
    }
`;

export const LikesLabel = styled.div`
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
`;