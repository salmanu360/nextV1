"use client";
import { currentUser } from "@/services/userServices";
import { createContext, useState, useContext, useEffect } from "react";
const AppContext = createContext();
const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const tempUser = await currentUser();
        setUsers({ ...tempUser });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);
  return (
    <AppContext.Provider value={{ users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { ContextProvider, useAppContext };
