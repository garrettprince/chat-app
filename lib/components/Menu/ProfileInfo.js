import React from 'react'
import ProfileIcon from '../Feed/Chat/ProfileIcon'

function ProfileInfo({ profile, profilePhoto }) {
  return (
    <div className='flex justify-left py-6 pl-6 space-x-3 items-center'>
      <ProfileIcon profilePhoto={profilePhoto} />
      <section>
        <p className='text-xl font-bold'>{profile}</p>
      </section>
    </div>
  )
}

export default ProfileInfo