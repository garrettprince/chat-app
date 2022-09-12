import { supabase } from "../utils/client";
import { useState } from "react";

const useAddUser = () => {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [users, setUsers] = useState("");

  const addUser = async (user) => {
    setIsAddingUser(true);
    setUsers([...users, user]);
    await supabase.from("users").insert(user);
    setIsAddingUser(false);
  };

  return [addUser, isAddingUser];
};

export default useAddUser;
