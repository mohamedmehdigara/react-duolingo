import React, { createContext, useState } from 'react';

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressContext, ProgressProvider };
