import { useState, useContext, useEffect, createContext } from 'react';
import Axios from '../blueprints';
import DataContext from './DataContext';

export const MainPageContext = createContext();

export function MainPageProvider({ children }) {
  const [hashtags, setHashtags] = useState([]);
  const { token } = useContext(DataContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadHashtags(), []);

  async function loadHashtags() {
    try {
      const request = await Axios.get('hashtags/trending', token);
      setHashtags(request.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MainPageContext.Provider
      value={{
        hashtags,
        loadHashtags,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
}

export default MainPageProvider;
