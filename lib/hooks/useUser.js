import { useEffect, useState } from "react";
import { supabase } from "../utils/client";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const [isFetchingUsers, setIsFetchingUsers] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const fetchUsers = async () => {
    setIsFetchingUsers(true);
    const { data } = await supabase.from("users").select("*");
    setUsers(data);
    setIsFetchingUsers(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return [
    users,
    isFetchingUsers,
    currentUser,
    setCurrentUser,
    () => fetchUsers(),
  ];
};

export default useUser;
