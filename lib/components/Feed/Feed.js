import React from "react";
import Nav from "./Nav";
import MessageInput from "./MessageInput";
import Chat from "./Chat/Chat";
import { supabase } from "../../utils/client";

function Feed() {

 

  return (
    <div className="w-full sm:w-[44rem] flex flex-col">
      <Nav />

      <Chat />

      <MessageInput />
    </div>
  );
}

export default Feed;
