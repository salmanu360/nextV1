"use client";
import { createContext, useState, useContext } from "react";
const AppContext = createContext();
const ContextProvider = (props) => {
  const [users, setUsers] = useState({
    id: "",
    email: "",
  });
  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {props.children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { ContextProvider, useAppContext };
