import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { placeholderPrompts } from "../../utils/data";

function MessageInput() {
  return (
    <div className="h-18 px-4 pt-4 mx-2">
      <div className="flex w-full border border-gray-400 rounded-full h-full p-1 pl-4 space-x-2">
        <input type="text" className="w-full text-xl focus:outline-none" placeholder={placeholderPrompts[(Math.floor(Math.random() * placeholderPrompts.length))]} />
        <button>
          <ArrowUpCircleIcon className="h-10 w-10 text-green-500 " />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
