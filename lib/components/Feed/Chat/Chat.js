import React, { useEffect } from "react";
import ProfileIcon from "./ProfileIcon";
import TimeAgo from "react-timeago";
import GreenChatBubble from "./GreenChatBubble";
import GrayChatBubble from "./GrayChatBubble";
import { supabase } from "../../../utils/client";
import { useState } from "react";

function Chat() {
  return (
    <div className="flex flex-col-reverse flex-1 overflow-scroll scrollbar-none">
      {/* <TimeAgo className="" date="" /> */}

      <div className="flex justify-end mr-6">
        <GreenChatBubble className="" />
        <ProfileIcon />
      </div>
      <div className="flex justify-end space-x-2 m-1 mr-24 items-center">
        <p className="text-sm text-black">{}</p>
        <p className="text-xs text-gray-500">34 minutes ago</p>
      </div>

    </div>
  );
}

export default Chat;
