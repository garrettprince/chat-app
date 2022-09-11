import { supabase } from "../utils/client";
import { useState } from "react";

const useAddChat = () => {
  const [isAddingChat, setIsAddingChat] = useState(false);
  const [chats, setChats] = useState("");

  const addChat = async (chat) => {
    setIsAddingChat(true);
    setChats([...chats, chat]);
    await supabase.from("").insert(chat);
    setIsAddingChat(false);
  };

  return [addChat, isAddingChat];
};

export default useAddChat;