import { useState, useEffect, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import DataContext from '../../../../hooks/DataContext';

import Axios from '../../../../blueprints';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function useUsers(userName) {
  const [users, setUsers] = useState([]);
  const { token } = useContext(DataContext);

  const browse = useNavigate();
  const config = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }, [token]);
  useEffect(() => {
    if (userName.length > 0) {
      const response = Axios.get(`users/username/${userName}`, config);
      response.then(async ({ data }) => {
        const result = await Promise.all(
          data.users.map(async (user, index) => {
            const { id, imageUrl, username, isFollowing } = user;
            return (
              <motion.li
                key={id}
                initial='hidden'
                animate='visible'
                variants={variants}
                transition={{ delay: index * 0.05 }}
              >
                <figure onClick={() => browse(`/user/${id}`)}>
                  <img src={imageUrl} alt={`${username}`} />
                  <figcaption>{username}</figcaption>
                  <figurecaption style={{ color: '#7c7c7c' }}>
                    {isFollowing ? <span>&#8226; following</span> : ''}
                  </figurecaption>
                </figure>
              </motion.li>
            );
          }),
        );
        setUsers(result);
      });
      response.catch((error) => console.error(error));
    }
  }, [userName, browse, config]);
  return [users, setUsers];
}
