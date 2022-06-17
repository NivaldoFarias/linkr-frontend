import styled from 'styled-components';
//import { FiHeart } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';

/*
{
  id: "34"
  text: "Olha o github de jesus!! #jesus #github"
  totalLikes: 0
  url: "https://github.com/jesus/"
  urlDescription: "Jesus has 51 repositories available. Follow their code on GitHub."
  urlPicture: "https://avatars.githubusercontent.com/u/23031?v=4?s=400"
  urlTitle: "Jesus - Overview"
  userHasLiked: false
  userId: "3"
  userPictureUrl: "https://img.freepik.com/vetores-gratis/avatar-de-midia-social-jovem-ruiva-moderna_506604-471.jpg"
  username: "magabi"
  usersWhoLiked: [] // máximo 2
}
*/

export default function Post({ post }) {
  const navigate = useNavigate();

  function goToUserPage() {
    navigate(`/user/${post.userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '');
    navigate(`/hashtag/${cleanHashtag}`);
  }

  return (
    <PostContainer key={post.id}>
      <Left>
        <ProfileImage onClick={goToUserPage} src={post.userPictureUrl} />
        <Like hasLiked={post.userHasLiked}>
          {post.userHasLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          <LikesLabel>{post.totalLikes} likes</LikesLabel>
        </Like>
      </Left>
      <Right>
        <UserName onClick={goToUserPage}>{post.username}</UserName>
        <PostText>
          <ReactHashtag
            renderHashtag={(val) => (
              <Hashtag
                onClick={() => {
                  goToHashtagPage(val);
                }}
              >
                {val}
              </Hashtag>
            )}
          >
            {post.text}
          </ReactHashtag>
        </PostText>

        <Link href={post.url} target='blank'>
          <LinkContainer>
            <LinkInfo>
              <Title>{post.urlTitle}</Title>
              <Description>{post.urlDescription}</Description>
              <Url>{post.url}</Url>
            </LinkInfo>
            <ImageContainer>
              <PostImage src={post.urlPicture} />
            </ImageContainer>
          </LinkContainer>
        </Link>
      </Right>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  padding: 18px;
  display: flex;
  gap: 18px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  object-fit: cover;
  margin-bottom: 18px;
  cursor: pointer;
`;

const Right = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 19px;
  margin-bottom: 4px;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 7px;
  cursor: pointer;
`;

const PostText = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.post};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 16px;
`;

const Hashtag = styled.span`
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer !important;
`;

const LinkContainer = styled.div`
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

const LinkInfo = styled.div`
  padding: 16px;
  flex: 1 1 auto;
  height: 100%;
  cursor: pointer !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
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

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 17px;
  color: #cecece;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
const Description = styled.div`
  font-size: 12px;
  color: #9b9595;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 5px;
`;

const Url = styled.div`
  font-size: 12px;
  color: #cecece;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 13px;
  width: 100%;
  word-break: break-all;
`;

const Like = styled.div`
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

const LikesLabel = styled.div`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
`;
