import React from "react";
import ProfileIcon from "./ProfileIcon";
import TimeAgo from "react-timeago";
import GreenChatBubble from "./GreenChatBubble";
import GrayChatBubble from "./GrayChatBubble";

function Chat() {
  return (
    <div className="flex flex-col-reverse flex-1 overflow-scroll scrollbar-none">
      {/* User Info */}

      {/* Need to configure this with the database for the _created_at section using a p tag in the meantime as placeholder */}
      {/* <TimeAgo className="" date="" /> */}

      <div className="flex justify-end mr-6">
        <GreenChatBubble className="" />
        <ProfileIcon />
      </div>
      <div className="flex justify-end space-x-2 m-1 mr-24 items-center">
        <p className="text-sm text-black">Garrett Prince</p>
        <p className="text-xs text-gray-500">34 minutes ago</p>
      </div>

      <div className="flex justify-end mr-6">
        <GreenChatBubble className="" />
        <ProfileIcon />
      </div>
      <div className="flex justify-end space-x-2 m-1 mr-24 items-center">
        <p className="text-sm text-black">Garrett Prince</p>
        <p className="text-xs text-gray-500">34 minutes ago</p>
      </div>

      <div className="flex justify-end mr-6">
        <GreenChatBubble className="" />
        <ProfileIcon />
      </div>
      <div className="flex justify-end space-x-2 m-1 mr-24 items-center">
        <p className="text-sm text-black">Garrett Prince</p>
        <p className="text-xs text-gray-500">34 minutes ago</p>
      </div>
      <div className="flex justify-end mr-6">
        <GreenChatBubble className="" />
        <ProfileIcon />
      </div>
      <div className="flex justify-end space-x-2 m-1 mr-24 items-center">
        <p className="text-sm text-black">Garrett Prince</p>
        <p className="text-xs text-gray-500">34 minutes ago</p>
      </div>
      <div className="flex justify-end mr-6">
        <GreenChatBubble className="" />
        <ProfileIcon />
      </div>
      <div className="flex justify-end space-x-2 m-1 mr-24 items-center">
        <p className="text-sm text-black">Garrett Prince</p>
        <p className="text-xs text-gray-500">34 minutes ago</p>
      </div>
      <div className="flex ml-6">
        <ProfileIcon />
        <GrayChatBubble />
      </div>
      <div className="flex space-x-2 m-1 ml-24 items-center">
        <p className="text-sm text-black">Roger Rodriguez</p>
        <p className="text-xs text-gray-500">1 hour ago</p>
      </div>
    </div>
  );
}

export default Chat;
