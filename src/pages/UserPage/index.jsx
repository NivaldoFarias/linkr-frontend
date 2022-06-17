import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../../blueprints';

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
      setPosts(
        data.posts.map((post) => {
          const { id, likes, url } = post;
          return <li key={id}></li>;
        }),
      );
    });
    promise.catch((error) => console.log(error));
  }, [userId]);

  return (
    <>
      <div>
        <h1>{userName === 'timeline' ? 'timeline' : `${userName}'s posts`}</h1>
      </div>
      <ul>{posts}</ul>
    </>
  );
}
