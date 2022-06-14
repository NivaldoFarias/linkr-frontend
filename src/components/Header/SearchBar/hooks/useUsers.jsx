import { useState, useEffect } from 'react';
import Axios from '../../../../adapters';

export default function useUsers(userName) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const response = Axios.get(`search/${userName}`);
    response.then(async ({data}) => {
      const result = await Promise.all(data.map(async(user) => {
        const {id, picture_url, username} = user;
        return (
          <li key={id}>
            <figure>
              <img src={picture_url} alt={`${username} photo`}/>
              <figcaption>{username}</figcaption>
            </figure>
          </li>
        );
      }));
      setUsers(result);
    });
  },[userName]);
  return [users];
}