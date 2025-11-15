import { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedCount, setSavedCount] = useState(0);

  const incrementSaved = () => {
    setSavedCount((prev) => prev + 1);
  };
};
