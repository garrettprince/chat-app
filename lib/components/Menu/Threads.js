import React from "react";
import { useState } from "react";

function Threads({ currentThread, name, handleClick, selected }) {
  return (
    <div className="mb-2">
      <button
        onClick={handleClick}
        className={`${
          selected
            ? "text-xl font-bold pl-16 w-full flex"
            : "text-xl text-gray-500 pl-16 w-full flex"
        }`}
      >
        {name}
      </button>
    </div>
  );
}

export default Threads;
