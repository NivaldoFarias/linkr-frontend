import { useState, useEffect, createContext } from 'react';

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [user, setUser] = useState(null);
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
        width,
        setWidth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;