import React from "react";
import { useState } from "react";

function Threads({ currentThread, name, handleClick }) {
console.log(currentThread)

  return (
    <div className="mb-2">
      <button
        onClick={handleClick}
        className={`${
            currentThread === name
            ? "flex text-xl pl-16 w-full font-bold"
            : "text-xl text-gray-500 pl-16 w-full flex"
        }`}
      >{name}</button>
    </div>
  );
}

export default Threads;
