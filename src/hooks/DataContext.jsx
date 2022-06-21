import { useState, useEffect, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('token', null);
  const [lightMode, setLightMode] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        lightMode,
        setLightMode,
        width,
        setWidth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
