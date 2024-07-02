import { useState } from "react";
import { Context } from "./context";
const AppContext = Context;
export const UserProvider = props => {
  const [users, setUsers] = useState([]);
  //Function to add User
  const addUser = (id, userName, email, password) => {
    const newUser = { id, userName, email, password };
    setUsers([...users, newUser]);
  };

  return (
    <AppContext.Provider value={{ users, setUsers, addUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
