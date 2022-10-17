import React from 'react'
import NavItem from './NavItem'
import requests from '../utils/requests'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav>
      <div className='flex overflow-x-scroll px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 scrollbar-hide'>
        {Object.entries(requests).map(([key, {title, url}]) => (
          <NavItem key={title} title={title} url={url}/>
        ))}
      </div>
    </nav>
  )
}

export default NavBar