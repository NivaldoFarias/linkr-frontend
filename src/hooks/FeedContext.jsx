import { createContext, useState } from 'react';

import { feedResponse } from './../mocks/feedResponse';
import Axios from '../blueprints';

const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feedData, setFeedData] = useState({ ...feedResponse });

  const [feed, setFeed] = useState({
    updatePosts: async (token = null, route = '/timeline') => {
      const CONFIG = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const PATH = `${route}/posts`;

      const request = await Axios.get(PATH, CONFIG);
      setFeedData(request?.data.posts ?? { ...feedData });

      if (request?.data.username && request?.data.imageUrl) {
        return { username: request?.data.username, imageUrl: request?.data.imageUrl };
      } else if (request?.data.username) {
        return { username: request.data.username };
      } else if (request?.data.imageUrl) {
        return { imageUrl: request.data.imageUrl };
      } else return null;
    },
    canCreatePost: true,
    userThumbnail: false,
    title: 'timeline',
  });

  return (
    <FeedContext.Provider value={{ feed, setFeed, feedData, setFeedData }}>
      {children}
    </FeedContext.Provider>
  );
}

export default FeedContext;
