import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [refreshButtons, setRefreshButtons] = useState(false);

  return (
    <Context.Provider
      value={{
        refreshButtons,
        setRefreshButtons,
      }}
    >
      {children}
    </Context.Provider>
  );
};
