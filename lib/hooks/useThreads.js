import { useEffect, useState } from "react";
import { supabase } from "../utils/client";

const useThreads = () => {
  const [threads, setThreads] = useState([]);
  const [isFetchingThreads, setIsFetchingThreads] = useState(false);
  const [currentThread, setCurrentThread] = useState("general");

  const fetchThreads = async () => {
    setIsFetchingThreads(true)
    const { data } = await supabase.from("threads").select("*");
    setThreads(data);
    setIsFetchingThreads(false);
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return [threads, isFetchingThreads, currentThread, setCurrentThread, () => fetchThreads()];
};

export default useThreads;
