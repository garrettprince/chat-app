import React from 'react'
import { Bars3Icon, ArrowPathIcon } from "@heroicons/react/24/solid";

function Nav() {
  return (
    <div className="h-6 flex justify-between items-center mt-4 pb-10">
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