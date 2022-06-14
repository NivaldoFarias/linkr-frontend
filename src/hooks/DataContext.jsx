import { createContext, useState } from 'react';

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        session,
        setSession,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
