import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ReactHashtag from '@mdnm/react-hashtag';
import { useContext, useEffect, useState } from 'react';
import Axios from '../../../blueprints';
import DataContext from '../../../hooks/DataContext';

import {
  PostContainer,
  Left,
  ProfileImage,
  Like,
  LikesLabel,
  Right,
  UserAndDeleteContainer,
  UserName,
  ContentModal,
  PostText,
  Hashtag,
  Link,
  LinkContainer,
  LinkInfo,
  Title,
  Description,
  Url,
  ImageContainer,
  PostImage
} from "./styles";

import Modal from 'react-modal';


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




export default function Post(props) {
  const { token } = useContext(DataContext);
  const [isLiked, setIsLiked] = useState(props.post.userHasLiked);
  const [post, setPost] = useState(props.post);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setIsLiked(props.post.userHasLiked);
    setPost(props.post);
  }, [props]);

  function goToUserPage() {
    navigate(`/user/${post.userId}`);
  }

  function goToHashtagPage(hashtag) {
    const cleanHashtag = hashtag.replace('#', '').toLowerCase();
    navigate(`/hashtag/${cleanHashtag}`);
  }

  async function likeButtonClicked() {
    console.log('likeButtonClicked');
    const tryToLike = !isLiked;
    setIsLiked(tryToLike);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `/posts/${post.id}/${tryToLike ? '' : 'un'}like`;
    try {
      const response = await Axios.post(url, {}, config);
      await updatePostData();
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePostData() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const url = `/posts/${post.id}`;
    try {
      const { data } = await Axios.get(url, config);
      console.log(data);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleDeletePost() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const url = `/posts/${post.id}`;
    try {
      const { data } = await Axios.delete(url, config);

      //IMPLEMENTS DELETE-ROUTE
      //IMPLEMENTS DELETE-ROUTE
      //IMPLEMENTS DELETE-ROUTE
      //IMPLEMENTS DELETE-ROUTE

      // setPost(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PostContainer key={post.id}>
      <Left>
        <ProfileImage onClick={goToUserPage} src={post.userPictureUrl} />
        <Like hasLiked={isLiked} onClick={likeButtonClicked}>
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          <LikesLabel>{post.totalLikes} likes</LikesLabel>
        </Like>
      </Left>

      <Right>
        <UserAndDeleteContainer>
          <UserName onClick={goToUserPage}>{post.username}</UserName>
          <div>
            <AiFillEdit />
            <AiFillDelete onClick={openModal} />
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <ContentModal>
              <h2>
                Are you sure you want
                to delete this post?
              </h2>

              <div>
                <button onClick={closeModal} >No, go back</button>
                <button onClick={handleDeletePost} >Yes, delete it</button>
              </div>
            </ContentModal>
          </Modal>
        </UserAndDeleteContainer>
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: `#333333`,
    borderRadius: '50px',
    padding: '38px 44px 65px',
    maxWidth: '430px'
  },
};



