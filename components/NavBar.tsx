import React from 'react'
import NavItem from './NavItem'
import requests from '../utils/requests'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='relative'>
      <div className='flex overflow-x-scroll px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 scrollbar-hide'>
        {Object.entries(requests).map(([key, {title, url}]) => (
          <NavItem key={key} query={key} title={title} url={url}/>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-full w-1/12' />
    </nav>
  )
}

export default NavBar