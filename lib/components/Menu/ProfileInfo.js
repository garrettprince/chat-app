import React from 'react'
import ProfileIcon from '../Feed/Chat/ProfileIcon'

function ProfileInfo() {
  return (
    <div className='flex justify-left py-6 pl-6 space-x-3'>
      <ProfileIcon />
      <section>
        <p className='text-xl font-bold'>Garrett Prince</p>
        <p className='text-sm text-gray-500'>@breakfastboi</p>
      </section>
    </div>
  )
}

export default ProfileInfo