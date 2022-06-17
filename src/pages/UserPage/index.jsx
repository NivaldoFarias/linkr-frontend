import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../../adapters';
import Feed from "../../components/Feed";

export default function UserPage() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('timeline');
  const [picture, setPicture] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = Axios.get(`/users/${userId}/posts`);
    promise.then(({ data }) => {
      setUserName(data.username);
      setPicture(data.imageUrl);
      setPosts(data.posts)
    });
    promise.catch((error) => console.log(error));
  }, [userId]);

  return (
    <Feed title={`${userName}'s posts`} posts={posts} canCreatePost={false} userThumbnail={picture}/>
  );

}
