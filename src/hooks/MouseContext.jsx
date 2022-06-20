import { createContext, useState } from 'react';

const MouseContext = createContext();

export function MouseProvider({ children }) {
  const [clicking, setClicking] = useState(false);
  return (
    <MouseContext.Provider value={{ clicking, setClicking }}>{children}</MouseContext.Provider>
  );
}

export default MouseContext;
