import { supabase } from "../utils/client";
import { useState } from "react";

const useAddThread = () => {
  const [isAddingThread, setIsAddingThread] = useState(false);
  const [threads, setThreads] = useState([]);

  const addThread = async (thread) => {
    setIsAddingThread(true);
    setThreads([...threads, thread]);
    await supabase.from("threads").insert(thread);
    setIsAddingThread(false);
  };

  return [addThread, isAddingThread];
};

export default useAddThread;
