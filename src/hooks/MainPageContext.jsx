import { useState, useContext, useEffect, createContext } from 'react';
import Axios from '../blueprints';
import DataContext from './DataContext';

export const MainPageContext = createContext();

export function MainPageProvider({ children }) {
  const [hashtags, setHashtags] = useState([]);
  const { token } = useContext(DataContext);

  useEffect(() => {
    loadHashtags();
  }, []);

  function loadHashtags() {
    Axios.get('hashtags/trending', token)
      .then(({ data }) => {
        setHashtags(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
