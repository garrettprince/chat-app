import React from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import {
  InformationCircleIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function Footer({ handleLoggedIn }) {
  return (
    <div className="flex w-full pb-7 justify-between px-7">
      <button onClick={handleLoggedIn}>
        <ArrowLeftOnRectangleIcon className="h-7 w-7 text-gray-500" />
      </button>
      <InformationCircleIcon className="h-7 w-7 text-gray-500" />
      <MoonIcon className="h-7 w-7 text-gray-500" />
    </div>
  );
}

export default Footer;
