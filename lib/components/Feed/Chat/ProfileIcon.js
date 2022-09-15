import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

function ProfileIcon({ profilePhoto }) {

  if (profilePhoto) {
    return (
      <div className="flex h-12 w-12 rounded-full bg-blue-500 items-center justify-center">
        <img className="rounded-full" src={profilePhoto} alt="" />
      </div>
    );
  } else if (!profilePhoto) {
    return (

    <div className="flex h-12 w-12 rounded-full bg-blue-500 items-center justify-center text-white">
    </div>
    )
  }

  // return (
  //   <div>
  //     <div className="flex h-12 w-12 rounded-full bg-blue-500 items-center justify-center text-white">

  //       {profilePhoto && (

  //       <img
  //         className='rounded-full'
  //         src={profilePhoto}
  //         alt=""
  //       />
  //       )
        
  //       }

  //     </div>
  //   </div>
  // );
}

export default ProfileIcon