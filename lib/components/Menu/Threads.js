import React from "react";
import UnreadIndicator from "./UnreadIndicator";

function Threads() {
  return (
    <div className="flex-1 space-y-2">
      <div className="font-bold text-md text-gray-500 pl-8 mt-16 mb-4">
        DISCUSSIONS
      </div>
      <p className="text-xl text-gray-500 pl-16">cat-chat</p>
      <p className="text-xl font-bold pl-16">placeholder</p>
      <p className="text-xl text-gray-500 pl-16">romcom-talk</p>
      <p className="text-xl text-gray-500 pl-16">worst-hair</p>
      <div className="flex items-center space-x-2">
        <p className="text-xl text-gray-500 pl-16">palindromes-only</p>
        <UnreadIndicator />
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-xl text-gray-500 pl-16">dustin</p>
        <UnreadIndicator />
      </div>
    </div>
  );
}

export default Threads;
