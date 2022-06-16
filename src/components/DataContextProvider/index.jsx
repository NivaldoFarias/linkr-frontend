import { useState, useEffect } from 'react';
import DataContext from '../../contexts/DataContext';

export default function DataContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
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
        session,
        setSession,
        width,
        setWidth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
