import { useContext, useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed';
import DataContext from '../../hooks/DataContext';
import Axios from '../../blueprints';

export default function UserPage() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('timeline');
  const [picture, setPicture] = useState('');
  const [posts, setPosts] = useState([]);
  const { token } = useContext(DataContext);

  const config = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }, [token]);

  useEffect(() => {
    const promise = Axios.get(`/users/${userId}/posts`, config);
    promise.then(async ({ data }) => {
      const result = await Promise.all(
        data.posts.map(async (post) => {
          return { ...post, userPictureUrl: data.imageUrl, userId };
        }),
      );
      setUserName(data.username);
      setPicture(data.imageUrl);
      setPosts(result);
    });
    promise.catch((error) => console.log(error));
  }, [userId, config]);

  return (
    <Feed
      title={`${userName}'s posts`}
      posts={posts}
      canCreatePost={false}
      userThumbnail={picture}
    />
  );
}
