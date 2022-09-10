import React from 'react'
import { Bars3Icon, ArrowPathIcon } from "@heroicons/react/24/solid";

function Nav() {
  return (
    <div className=" lg:h-10 flex justify-between items-center mb-5">
      <button>
        <Bars3Icon className="h-8 w-8 ml-6 lg:text-white disabled" />
      </button>
      <p className='font-bold text-xl'>general</p>
      <button>
        <ArrowPathIcon className="h-7 w-7 mr-6" />
      </button>
    </div>
  );
}

export default Nav