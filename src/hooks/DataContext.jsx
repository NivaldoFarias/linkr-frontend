import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

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
        width,
        setWidth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
