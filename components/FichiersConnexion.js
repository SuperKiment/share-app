import React, { createContext, useState } from "react";

export const FichiersContext = createContext();

export const FichiersProvider = ({ children }) => {
  const [fichiers, setFichiers] = useState([]);

  return (
    <FichiersContext.Provider value={{ fichiers, setFichiers }}>
      {children}
    </FichiersContext.Provider>
  );
};

export const useFichiers = () => React.useContext(FichiersContext);
