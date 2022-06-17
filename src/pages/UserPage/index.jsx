import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Feed from "../../components/Feed";
import TokenContext from '../../hooks/TokenContext';
import Axios from '../../blueprints';

export default function UserPage() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('timeline');
  const [picture, setPicture] = useState('');
  const [posts, setPosts] = useState([]);

  const {token} = useContext(TokenContext);

  useEffect(() => {

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const promise = Axios.get(`/users/${userId}/posts`, config);
    promise.then(({ data }) => {
      setUserName(data.username);
      setPicture(data.imageUrl);
      setPosts(data.posts);
    });
    promise.catch((error) => console.log(error));
  }, [userId]);

  return (
    <Feed
      title={`${userName}'s posts`}
      posts={posts}
      canCreatePost={false}
      userThumbnail={picture}
    />
  );
}
