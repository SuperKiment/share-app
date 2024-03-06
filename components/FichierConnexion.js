import React, { createContext, useState } from "react";

export const FichierContext = createContext();

export const FichierProvider = ({ children }) => {
  const [fichier, setFichier] = useState([]);

  return (
    <FichierContext.Provider value={{ fichier, setFichier }}>
      {children}
    </FichierContext.Provider>
  );
};

export const useFichier = () => React.useContext(FichierContext);
