import React from "react";
import { Bars3Icon, ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/solid";
import useThreads from "../../hooks/useThreads";
import useChat from "../../hooks/useChat";

function Nav({ currentThread, handleMenuToggle, menuToggle, setMenuToggle }) {
  const [chats, isFetchingChats, fetchChats] = useChat();

  return (
    <div className="h-6 flex justify-between items-center mt-4 pb-10">
      <button>
        <Bars3Icon
          onClick={handleMenuToggle}
          className="h-8 w-8 ml-6 lg:text-white lg:disabled"
        />
        {menuToggle === false && (
          <XMarkIcon
            onClick={handleMenuToggle}
            className="h-8 w-8 ml-6 lg:text-white lg:disabled"
          />
        )}
      </button>
      <p className="font-bold text-xl">{currentThread}</p>
      <button>
        <ArrowPathIcon
          onClick={fetchChats}
          className={`${
            isFetchingChats ? "h-7 w-7 mr-6 animate-spin" : "h-7 w-7 mr-6"
          }`}
        />
      </button>
    </div>
  );
}

export default Nav;
