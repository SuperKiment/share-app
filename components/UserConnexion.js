import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("");

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const updateTheme = (newtheme) => {
    setTheme(newtheme);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, updateTheme, theme }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
