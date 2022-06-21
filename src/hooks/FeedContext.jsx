import { useEffect, createContext } from 'react';

const FeedContext = createContext();

export function FeedProvider({ children, updatePostsFunction }) {
  useEffect(() => {}, []);

  return <FeedContext.Provider value={{ updatePostsFunction }}>{children}</FeedContext.Provider>;
}

export default FeedContext;
