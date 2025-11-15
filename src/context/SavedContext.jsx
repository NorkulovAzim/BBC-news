import { createContext, useContext, useState } from "react";

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const addToSaved = (item) => {
    if (!savedItems.some((saved) => saved.id === item.id)) {
      setSavedItems([...savedItems, item]);
    }
  };

  const removeSaved = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  return (
    <SavedContext.Provider value={{ savedItems, addToSaved, removeSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
