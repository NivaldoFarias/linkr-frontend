import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion';
import Axios from '../../../../blueprints';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function useUsers(userName) {
  const [users, setUsers] = useState([]);
  const browse = useNavigate();
  useEffect(() => {
    if (userName.length > 0) {
      const response = Axios.get(`users/username/${userName}`);
      response.then(async ({ data }) => {
        const result = await Promise.all(
          data.users.map(async (user, index) => {
            const { id, imageUrl, username } = user;
            return (
              <motion.li
                key={id}
                initial='hidden'
                animate='visible'
                variants={variants}
                transition={{ delay: index * 0.05 }}
                onClick={() => browse(`/user/${id}`)}
              >
                <figure>
                  <img src={imageUrl} alt={`${username}`} />
                  <figcaption>{username}</figcaption>
                </figure>
              </motion.li>
            );
          }),
        );
        setUsers(result);
      });
      response.catch((error) => console.error(error));
    }
  }, [userName, browse]);
  return [users];
}
