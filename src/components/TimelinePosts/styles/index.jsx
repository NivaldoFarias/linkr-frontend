import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const PostContainer = styled.div`
  width: 611px;
  height: 276px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 18px;
  display: flex;
`;
export const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-right: 16px;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  object-fit: cover;
  margin-bottom: 18px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 8;
`;

export const UserName = styled.div`
  font-size: 19px;
  margin-bottom: 4px;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 7px;
`;

export const PostText = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.post};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 16px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 503px;
  height: 155px;
  border: ${({ theme }) => theme.styles.defaultBorder};
  border-radius: 11px;
  position: relative;
`;
export const Link = styled.a`
  text-decoration: none;
`;

export const LinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
`;

export const PostImage = styled.img`
  width: 153.44px;
  height: 153px;
  border-radius: 0px 12px 13px 0px;
  object-fit: fill;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;
export const Title = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.post};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
