import { createContext, useContext, useState } from "react";

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const addToSaved = (item) => {
    if (!savedItems.some((saved) => saved.id === item.id)) {
      setSavedItems([...savedItems, item]);
    }
  };

  return (
    <SavedContext.Provider value={{ savedItems, addToSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
