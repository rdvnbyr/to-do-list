import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const value = {
    toggle,
    handleToggle,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
