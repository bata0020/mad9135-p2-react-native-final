import React, { createContext, useState, useEffect, useContext } from "react";
import { allTutors } from "../dataSource/data";

const TutorContext = createContext();

function TutorProvider(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(allTutors);
  }, [allTutors]);

  return <TutorContext.Provider value={[data]} {...props} />;
}

function useTutors() {
  const context = useContext(TutorContext);

  if (!context) throw new Error("Error in data context provider");

  return context;
}

export { TutorProvider, useTutors };
