import React from "react";
import Nav from "./Nav";
import MessageInput from "./MessageInput";
import Chat from "./Chat/Chat";
import { supabase } from "../../utils/client";

function Feed({
  threads,
  isFetchingThreads,
  currentThread,
  setCurrentThread,
  fetchThreads,
}) {
  return (
    <div className="w-full sm:w-[44rem] flex flex-col">
      <Nav currentThread={currentThread} />

      <Chat />

      <MessageInput />
    </div>
  );
}

export default Feed;
