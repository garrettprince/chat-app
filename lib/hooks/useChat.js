import { useEffect, useState } from "react";
import { supabase } from "../utils/client";

const useChat = () => {
  const [chats, setChats] = useState([]);
  const [isFetchingChats, setIsFetchingChats] = useState(false);

  const fetchChats = async () => {
    setIsFetchingChats(true)
    const { data } = await supabase.from("chats").select("*");
    setChats(data);
    setIsFetchingChats(false);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return [chats, isFetchingChats, () => fetchChats()];
};

export default useChat;
