import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../../adapters';

export default function UserPage() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('timeline');
  const [picture, setPicture] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const promise = Axios.get(`/users/${userId}/posts`);
    promise.then(({ data }) => {
      console.log(data); //falta implementar por isso o console
    });
    promise.catch((error) => console.log(error));
  }, [userId]);

  return (
    <div>
      <h1>UserPage</h1>
    </div>
  );
}
