import React from 'react'
import Footer from './Footer';
import ProfileInfo from './ProfileInfo';
import Threads from './Threads';

function Menu() {
  return (
    <div className="hidden lg:w-72 rounded-[2rem] bg-gray-200/75 lg:flex lg:flex-col">
      <ProfileInfo />

      <Threads />

      <Footer />
    </div>
  );
}

export default Menu